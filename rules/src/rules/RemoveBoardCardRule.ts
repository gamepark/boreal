import { isMoveItemType, ItemMove, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { BoardHelper } from './helper/BoardHelper'
import { RuleId } from './RuleId'

export class RemoveBoardCardRule extends PlayerTurnRule {

  onRuleStart() {
    const boardCards = this.boardCards
    if (!boardCards.length) return [this.startRule(RuleId.Rest)]
    return []
  }
  getPlayerMoves(): MaterialMove<number, number, number>[] {
    return this.boardCards
      .moveItems({
        type: LocationType.Destroyed
      })
  }

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.Card)(move) || move.location.type !== LocationType.Destroyed) return []
    return [
      ...new BoardHelper(this.game).refillBoardMoves,
      this.startRule(RuleId.Rest)
    ]
  }

  get boardCards() {
    return this.material(MaterialType.Card)
      .location(LocationType.BoardCard)
  }
}