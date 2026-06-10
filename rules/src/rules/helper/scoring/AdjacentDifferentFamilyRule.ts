import { CardFamily, CardId } from '../../../material/Card'
import { getCardDescription } from '../../../material/CardDescription'
import { LocationType } from '../../../material/LocationType'
import { MaterialType } from '../../../material/MaterialType'
import { AdjacentDifferentFamily } from '../../../material/VictoryPointCondition'
import { isAdjacent } from '../../utils/adjacent'
import { VictoryPointEffectRule } from './VictoryPointEffectRule'

export class AdjacentDifferentFamilyRule extends VictoryPointEffectRule<AdjacentDifferentFamily> {

  get score() {
    const adjacentAndDifferentFamily = this.adjacentCards
    return adjacentAndDifferentFamily.length * this.effect.points
  }

  get adjacentCards() {
    const adjacentDifferentFamilies: CardFamily[] = []


    const items = this
      .material(MaterialType.Card)
      .location(LocationType.Pyramid)
      .player(this.player)
      .filter((item, index) =>
        index !== this.card.getIndex()
        && isAdjacent(item.location, this.card.getItem()!.location)
      )
      .getItems<CardId>()

    for (const item of items) {
      const cardFamilies: CardFamily[] = getCardDescription(item.id.front).families ?? []
      const matchingFamilies = cardFamilies.filter((f) => !adjacentDifferentFamilies.includes(f))
      if (matchingFamilies.length) {
        adjacentDifferentFamilies.push(...matchingFamilies)
      }

    }

    return adjacentDifferentFamilies
  }

}