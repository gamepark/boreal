import { Material, MaterialGame, MaterialRulesPart } from '@gamepark/rules-api'
import { CardId } from '../../../material/Card'
import { getCardDescription } from '../../../material/CardDescription'
import { LocationType } from '../../../material/LocationType'
import { MaterialType } from '../../../material/MaterialType'

export abstract class VictoryPointEffectRule<Effect> extends MaterialRulesPart {


  constructor(game: MaterialGame, readonly card: Material, protected readonly scoreCard?: (card: Material) => number) {
    super(game)
  }

  get effect(): Effect {
    return getCardDescription(this.item.id.front).victoryPointEffect as Effect
  }

  get item() {
    return this.card.getItem<CardId>()!
  }

  get pyramid() {
    return this
      .material(MaterialType.Card)
      .location(LocationType.Pyramid)
      .player(this.player)
  }

  get player() {
    return this.item.location.player!
  }

  get description() {
    return getCardDescription(this.item.id.front)
  }
}