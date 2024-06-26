import { isMoveItemType, isSelectItemType, ItemMove, PlayerTurnRule } from '@gamepark/rules-api'
import { isArchive } from '../material/Card'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { BoardHelper } from './helper/BoardHelper'
import { RuleId } from './RuleId'

export class ReserveRule extends PlayerTurnRule {

  onRuleStart() {
    const boardCards = this.boardCards
    if (!boardCards.length) return [this.rules().startRule(RuleId.Rest)]
    return []
  }

  getPlayerMoves() {
    const boardCards = this.boardCards
    return boardCards.moveItems({
      type: LocationType.Reserve,
      player: this.player
    })
  }

  beforeItemMove(move: ItemMove) {
    if (isSelectItemType(MaterialType.Card)(move)) {
      const selected = this.material(MaterialType.Card).selected()
      if (selected.length) {
        delete selected.getItem()!.selected
      }
    }

    return []
  }

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.Card)(move) || move.location.type !== LocationType.Reserve) return []
    delete this.material(MaterialType.Card).getItem(move.itemIndex)?.selected
    return [
      ...new BoardHelper(this.game).refillBoardMoves,
      this.rules().startRule(RuleId.Rest)
    ]
  }

  get boardCards() {
    const hasArchive = this.hasArchive
    return this
      .material(MaterialType.Card)
      .location(LocationType.BoardCard)
      .filter((item) => !hasArchive || !isArchive(item.id.front))
  }

  get hasArchive() {
    return this
      .material(MaterialType.Card)
      .player(this.player)
      .id(({ front }: any) => front && isArchive(front))
      .length === 1
  }

}