import { LeftCard } from '../../../material/VictoryPointCondition'
import { isAdjacent } from '../../utils/adjacent'
import { VictoryPointEffectRule } from './VictoryPointEffectRule'

export class CardUnderRule extends VictoryPointEffectRule<LeftCard> {

  get score(): number {
    // Rules deviation: the printed rulebook lets the player freely choose one of the 2 cards below
    // ("au choix" / "your choice"). We deliberately auto-select the higher-scoring one instead: there
    // is never a rational reason to pick fewer Victory Points, so automating the choice removes a
    // pointless decision. The translations (help.card.points.under) reflect this with "la meilleure" /
    // "the best" rather than the rulebook wording.
    const cards = this.cardsUnder
    let maxScore = 0
    for (const cardIndex of cards.getIndexes()) {
      const score = this.scoreCard!(cards.index(cardIndex))
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