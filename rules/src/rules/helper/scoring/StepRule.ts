import { Step } from '../../../material/VictoryPointCondition'
import { VictoryPointEffectRule } from './VictoryPointEffectRule'

export class StepRule extends VictoryPointEffectRule<Step> {

  get score(): number {
    return this.effect.points * (this.item.location.y! + 1)
  }
}