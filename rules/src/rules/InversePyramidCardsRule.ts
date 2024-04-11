import { isMoveItemType, ItemMove, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { RuleId } from './RuleId'

export class InversePyramidCardsRule extends PlayerTurnRule {

  onRuleStart() {
    const cards = this.pyramidCards
    if (cards.length < 2) return [this.rules().startRule(RuleId.Rest)]
    return []
  }
  getPlayerMoves(): MaterialMove<number, number, number>[] {
    const cards = this.pyramidCards
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
      .location((l) => move.location.type === LocationType.Pyramid && move.location.x === l.x && move.location.y === l.y)
    if (!itemOnThisPlace.length) return []

    const moves: MaterialMove[] = []
    moves.push(itemOnThisPlace.moveItem(movedItem.location))
    moves.push(this.rules().startRule(RuleId.Rest))
    return moves
  }

  get pyramidCards() {
    return this.material(MaterialType.Card)
      .location(LocationType.Pyramid)
      .player(this.player)
  }
}