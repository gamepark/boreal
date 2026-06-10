import { CardFamily, CardId } from '../../../material/Card'
import { getCardDescription } from '../../../material/CardDescription'
import { FamilyMajority } from '../../../material/VictoryPointCondition'
import { VictoryPointEffectRule } from './VictoryPointEffectRule'

export class PerFamilySetRule extends VictoryPointEffectRule<FamilyMajority> {

  get score() {
    return this.familyWithMajority * this.effect.points
  }

  get familyWithMajority() {
    const pyramid = this.pyramid
    const green = pyramid.filter<CardId>((item) => !!getCardDescription(item.id.front).families?.includes(CardFamily.Green)).length
    const yellow = pyramid.filter<CardId>((item) => !!getCardDescription(item.id.front).families?.includes(CardFamily.Yellow)).length
    const red = pyramid.filter<CardId>((item) => !!getCardDescription(item.id.front).families?.includes(CardFamily.Red)).length
    const blue = pyramid.filter<CardId>((item) => !!getCardDescription(item.id.front).families?.includes(CardFamily.Blue)).length

    return Math.min(green, yellow, red, blue)
  }

}