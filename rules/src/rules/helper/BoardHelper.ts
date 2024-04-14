import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { MaterialMove, MaterialRulesPart } from '@gamepark/rules-api'

export class BoardHelper extends MaterialRulesPart {
  get refillBoardMoves(): MaterialMove[] {
    const deck = this.deck
    const boardCards = this.boardCards
    if (!deck.length) return []
    const moves: MaterialMove[] = []
    for (let x = 0; x < 8; x++) {
      if (boardCards.filter((item) => item.location.x === x).length) continue
      moves.push(
        deck.dealOne({
          type: LocationType.BoardCard,
          x: x
        })
      )
    }

    return moves
  }

  get boardCards() {
    return this
      .material(MaterialType.Card)
      .location(LocationType.BoardCard)
  }

  get deck() {
    return this
      .material(MaterialType.Card)
      .location(LocationType.Deck)
      .deck()
      .sort((item) => -item.location.x!)
  }
}