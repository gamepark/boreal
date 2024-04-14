import { Material, MaterialGame, MaterialRulesPart } from '@gamepark/rules-api'
import sum from 'lodash/sum'
import { Cards } from '../../material/CardDescription'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { VictoryPointType } from '../../material/VictoryPointCondition'
import { PlayerColor } from '../../PlayerColor'
import { AdjacentDifferentFamilyRule } from './scoring/AdjacentDifferentFamilyRule'
import { AdjacentFamilyRule } from './scoring/AdjacentFamilyRule'
import { AdjacentRule } from './scoring/AdjacentRule'
import { CardUnderRule } from './scoring/CardUnderRule'
import { FamilyMajorityRule } from './scoring/FamilyMajorityRule'
import { LeftCardRule } from './scoring/LeftCardRule'
import { PerFamilyRule } from './scoring/PerFamilyRule'
import { PerFamilySetRule } from './scoring/PerFamilySetRule'
import { RightCardRule } from './scoring/RightCardRule'
import { StepRule } from './scoring/StepRule'

export class ScoreHelper extends MaterialRulesPart {

  constructor(game: MaterialGame, readonly player: PlayerColor) {
    super(game)

  }

  getCardScore(card: Material) {
    const victoryPointEffect = Cards[card.getItem()!.id.front].victoryPointEffect
    if (!victoryPointEffect) return 0
    switch (victoryPointEffect.type) {
      case VictoryPointType.Brut:
        return victoryPointEffect.points
      case VictoryPointType.PerFamily:
        return new PerFamilyRule(this.game, card).score
      case VictoryPointType.AdjacentFamily:
        return new AdjacentFamilyRule(this.game, card).score
      case VictoryPointType.AdjacentDifferentFamily:
        return new AdjacentDifferentFamilyRule(this.game, card).score
      case VictoryPointType.FamilyMajority:
        return new FamilyMajorityRule(this.game, card).score
      case VictoryPointType.PerFamilySet:
        return new PerFamilySetRule(this.game, card).score
      case VictoryPointType.LeftCard:
        return new LeftCardRule(this.game, card).score
      case VictoryPointType.RightCard:
        return new RightCardRule(this.game, card).score
      case VictoryPointType.Step:
        return new StepRule(this.game, card).score
      case VictoryPointType.CardUnder:
        return new CardUnderRule(this.game, card).score
      case VictoryPointType.Adjacent:
        return new AdjacentRule(this.game, card).score
    }

    return 0
  }

  get totalScore() {
    const pyramid = this.pyramid
    return sum(
      pyramid.getIndexes().map((i) => this.getCardScore(pyramid.index(i)))
    )
  }

  get pyramid() {
    return this.material(MaterialType.Card)
      .location(LocationType.Pyramid)
      .player(this.player)
  }
}