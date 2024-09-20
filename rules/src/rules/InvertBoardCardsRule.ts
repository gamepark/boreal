import { isMoveItemType, isSelectItemType, ItemMove, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { RuleId } from './RuleId'

export class InvertBoardCardsRule extends PlayerTurnRule {

  onRuleStart() {
    const cards = this.boardCards
    if (cards.length < 2) return [this.startRule(RuleId.Rest)]
    return []
  }

  getPlayerMoves(): MaterialMove<number, number, number>[] {
    const cards = this.boardCards
    const indexes = cards.getIndexes()
    const moves: MaterialMove[] = []
    for (const index of indexes) {
      const movedItem = cards.getItem(index)
      moves.push(
        ...cards
          .index((i) => i !== index)
          .moveItems(movedItem.location)
      )
    }

    return moves
  }

  beforeItemMove(move: ItemMove) {
    if (isSelectItemType(MaterialType.Card)(move)) {
      const selected = this.material(MaterialType.Card).selected()
      if (selected.length) {
        delete selected.getItem()!.selected
      }
    }

    if (!isMoveItemType(MaterialType.Card)(move)) return []
    delete this.material(MaterialType.Card).getItem(move.itemIndex).selected
    const movedItem = this.material(MaterialType.Card).getItem(move.itemIndex)
    const itemOnThisPlace = this
      .material(MaterialType.Card)
      .location((l) => move.location.type === l.type && move.location.x === l.x)
    if (!itemOnThisPlace.length) return []

    const moves: MaterialMove[] = []
    moves.push(itemOnThisPlace.moveItem(movedItem.location))
    moves.push(this.startRule(RuleId.Rest))
    return moves
  }

  get boardCards() {
    return this.material(MaterialType.Card)
      .location(LocationType.BoardCard)
  }
}