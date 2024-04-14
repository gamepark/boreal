import { Material, MaterialGame, MaterialRulesPart } from '@gamepark/rules-api'
import { Cards } from '../../../material/CardDescription'
import { LocationType } from '../../../material/LocationType'
import { MaterialType } from '../../../material/MaterialType'

export abstract class VictoryPointEffectRule<Effect> extends MaterialRulesPart {


  constructor(game: MaterialGame, readonly card: Material) {
    super(game)
  }

  get effect(): Effect {
    return Cards[this.item.id.front].victoryPointEffect
  }

  get item() {
    return this.card.getItem()!
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
    return Cards[this.item.id.front]!
  }
}