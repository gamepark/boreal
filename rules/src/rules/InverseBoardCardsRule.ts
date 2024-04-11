import { isLocationSubset } from '@gamepark/react-game'
import { isMoveItemType, ItemMove, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { RuleId } from './RuleId'

export class InverseBoardCardsRule extends PlayerTurnRule {
  getPlayerMoves(): MaterialMove<number, number, number>[] {
    const cards = this.boardCards
    const indexes = cards.getIndexes()
    const moves: MaterialMove[] = []
    for (const index of indexes) {
      const movedItem = cards.getItem(index)!
      moves.push(
        ...cards
          .index((i) => i !== index)
          .moveItems(movedItem.location)
      )
    }

    return moves
  }

  beforeItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.Card)(move)) return []
    const movedItem = this.material(MaterialType.Card).getItem(move.itemIndex)!
    const itemOnThisPlace = this
      .material(MaterialType.Card)
      .location((l) => isLocationSubset(move.location, l))
    if (!itemOnThisPlace.length) return []

    const moves: MaterialMove[] = []
    moves.push(itemOnThisPlace.moveItem(movedItem.location))
    moves.push(this.rules().startRule(RuleId.Rest))
    return moves
  }

  get boardCards() {
    return this.material(MaterialType.Card)
      .location(LocationType.BoardCard)
  }
}