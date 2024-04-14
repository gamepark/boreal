import { LeftCard } from '../../../material/VictoryPointCondition'
import { isAdjacent } from '../../utils/adjacent'
import { ScoreHelper } from '../ScoreHelper'
import { VictoryPointEffectRule } from './VictoryPointEffectRule'

export class CardUnderRule extends VictoryPointEffectRule<LeftCard> {

  get score(): number {
    const cards = this.cardsUnder
    let maxScore = 0
    for (const cardIndex of cards.getIndexes()) {
      const score = new ScoreHelper(this.game, this.player).getCardScore(cards.index(cardIndex))
      if (score > maxScore) maxScore = score
    }

    return maxScore
  }

  get cardsUnder() {
    const item = this.item
    return this.pyramid
      .filter(({ location }) => isAdjacent(location, item.location) && location.y === (item.location.y! - 1))
  }
}