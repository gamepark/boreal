import { isMoveItemType, ItemMove, PlayerTurnRule } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { BoardHelper } from './helper/BoardHelper'
import { RuleId } from './RuleId'

export class ReserveRule extends PlayerTurnRule {
  getPlayerMoves() {
    const boardCards = this.boardCards
    return boardCards.moveItems({
      type: LocationType.Reserve,
      player: this.player
    })
  }

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.Card)(move) || move.location.type !== LocationType.Reserve) return []
    return [
      this.rules().startRule(RuleId.Rest),
      ...new BoardHelper(this.game).refillBoardMoves,
    ]
  }

  get boardCards() {
    return this
      .material(MaterialType.Card)
      .location(LocationType.BoardCard)
  }

}