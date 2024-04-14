import { CardFamily } from '../../../material/Card'
import { Cards } from '../../../material/CardDescription'
import { FamilyMajority } from '../../../material/VictoryPointCondition'
import { VictoryPointEffectRule } from './VictoryPointEffectRule'

export class PerFamilySetRule extends VictoryPointEffectRule<FamilyMajority> {

  get score() {
    return this.familyWithMajority * this.effect.points
  }

  get familyWithMajority() {
    const pyramid = this.pyramid
    const green = pyramid.filter((item) => Cards[item.id.front].families?.includes(CardFamily.Green)).length
    const yellow = pyramid.filter((item) => Cards[item.id.front].families?.includes(CardFamily.Yellow)).length
    const red = pyramid.filter((item) => Cards[item.id.front].families?.includes(CardFamily.Red)).length
    const blue = pyramid.filter((item) => Cards[item.id.front].families?.includes(CardFamily.Blue)).length

    return Math.min(green, yellow, red, blue)
  }

}