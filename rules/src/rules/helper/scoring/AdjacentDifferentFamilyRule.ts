import { CardFamily } from '../../../material/Card'
import { Cards } from '../../../material/CardDescription'
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
    return this
      .material(MaterialType.Card)
      .location(LocationType.Pyramid)
      .player(this.player)
      .filter((item, index) =>
        index !== this.card.getIndex()
        && isAdjacent(item.location, this.card.getItem()!.location)
        && !Cards[item.id.front].families?.some((f: CardFamily) => this.description.families?.includes(f))
      )
  }

}