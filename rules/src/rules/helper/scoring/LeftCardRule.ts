import { CardId } from '../../../material/Card'
import { getCardDescription } from '../../../material/CardDescription'
import { LeftCard, VictoryPointType } from '../../../material/VictoryPointCondition'
import { VictoryPointEffectRule } from './VictoryPointEffectRule'

export class LeftCardRule extends VictoryPointEffectRule<LeftCard> {

  get score(): number {
    const item = this.item
    const leftCard = this.pyramid
      .filter(({ location }) =>
        location.type === item.location.type
        && location.y === item.location.y
        && location.player === item.location.player
        && location.x === (item.location.x! - 2))

    if (leftCard.length) {
      if (getCardDescription(leftCard.getItem<CardId>()!.id.front).victoryPointEffect?.type === VictoryPointType.RightCard) return 0
      return this.scoreCard!(leftCard)
    }
    return 0
  }
}