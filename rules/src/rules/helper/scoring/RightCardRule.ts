import { CardId } from '../../../material/Card'
import { getCardDescription } from '../../../material/CardDescription'
import { LeftCard, VictoryPointType } from '../../../material/VictoryPointCondition'
import { VictoryPointEffectRule } from './VictoryPointEffectRule'

export class RightCardRule extends VictoryPointEffectRule<LeftCard> {

  get score(): number {
    const item = this.item
    const rightCard = this.pyramid
      .filter(({ location }) =>
        location.type === item.location.type
        && location.y === item.location.y
        && location.player === item.location.player
        && location.x === (item.location.x! + 2))

    if (rightCard.length) {
      if (getCardDescription(rightCard.getItem<CardId>()!.id.front).victoryPointEffect?.type === VictoryPointType.LeftCard) return 0
      return this.scoreCard!(rightCard)
    }
    return 0
  }
}