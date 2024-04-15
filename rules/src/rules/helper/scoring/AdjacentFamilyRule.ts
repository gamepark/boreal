import { Cards } from '../../../material/CardDescription'
import { LocationType } from '../../../material/LocationType'
import { MaterialType } from '../../../material/MaterialType'
import { AdjacentFamily } from '../../../material/VictoryPointCondition'
import { isAdjacent } from '../../utils/adjacent'
import { VictoryPointEffectRule } from './VictoryPointEffectRule'

export class AdjacentFamilyRule extends VictoryPointEffectRule<AdjacentFamily> {

  get score() {
    const adjacentFamily = this.adjacentCards
    return adjacentFamily.length * this.effect.points
  }

  get adjacentCards() {
    return this
      .material(MaterialType.Card)
      .location(LocationType.Pyramid)
      .player(this.player)
      .filter((item, index) => {
          return index !== this.card.getIndex()
            && isAdjacent(item.location, this.item.location)
            && Cards[item.id.front]!.families?.includes(this.effect.family)
        }
      )
  }
}