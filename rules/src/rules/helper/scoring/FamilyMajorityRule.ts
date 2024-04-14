import { families } from '../../../material/Card'
import { Cards } from '../../../material/CardDescription'
import { LocationType } from '../../../material/LocationType'
import { MaterialType } from '../../../material/MaterialType'
import { FamilyMajority } from '../../../material/VictoryPointCondition'
import { VictoryPointEffectRule } from './VictoryPointEffectRule'

export class FamilyMajorityRule extends VictoryPointEffectRule<FamilyMajority> {

  get score() {
    return this.familyWithMajority * this.effect.points
  }

  get familyWithMajority() {
    let count = 0
    const pyramid = this.pyramid
    for (const family of families) {
      const familyCards = pyramid.filter((item) => Cards[item.id.front].families?.includes(family)).length

      let hasOtherPlayerWithMore = false
      for (const otherPlayer of this.game.players) {
        if (otherPlayer === this.player) continue
        const otherFamilyCards = this
          .material(MaterialType.Card)
          .location(LocationType.Pyramid)
          .player(otherPlayer)
          .filter((item) => Cards[item.id.front].families?.includes(family))
          .length

        if (otherFamilyCards >= familyCards) {
          hasOtherPlayerWithMore = true
          break
        }
      }

      if (!hasOtherPlayerWithMore) {
        count++
      }
    }

    return count
  }

}