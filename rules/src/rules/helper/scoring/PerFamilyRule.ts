import { Cards } from '../../../material/CardDescription'
import { LocationType } from '../../../material/LocationType'
import { MaterialType } from '../../../material/MaterialType'
import { PerFamily } from '../../../material/VictoryPointCondition'
import { VictoryPointEffectRule } from './VictoryPointEffectRule'

export class PerFamilyRule extends VictoryPointEffectRule<PerFamily> {

  get score() {
    const pyramid = this.sameFamilyCards
    return pyramid.length * this.effect.points
  }

  get sameFamilyCards() {
    return this
      .material(MaterialType.Card)
      .location(LocationType.Pyramid)
      .player(this.player)
      .filter((item) => Cards[item.id.front].families?.includes(this.effect.family))
  }
}