import { PlayerTurnRule } from '@gamepark/rules-api'
import sum from 'lodash/sum'
import { Descriptions } from '../material/CardDescription'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { RuleId } from './RuleId'

export class RestRule extends PlayerTurnRule {
  onRuleStart() {
    const wonCompass = this.wonCompass

    if (!wonCompass) return [this.rules().startPlayerTurn(RuleId.Explore, this.nextPlayer)]

    return [
      this.explorationToken.moveItem((item) => ({
        ...item.location,
        x: item.location.x! + wonCompass
      }))
    ]

  }

  get wonCompass() {
    const nonCoveredCards = this.nonCoveredPyramidCards
    let wonCompass = sum(nonCoveredCards.getItems().map((item) => Descriptions[item.id.front]?.restBonus ?? 0))
    const compass = this.compass
    if (compass < 2) {
      wonCompass += 2 - compass
    }

    return wonCompass
  }

  get compass() {
    return this.explorationToken.getItem()!.location.x!
  }

  get explorationToken() {
    return this
      .material(MaterialType.ExplorationToken)
      .id(this.player)
  }

  get nonCoveredPyramidCards() {
    const pyramid = this.pyramid
    return pyramid.filter((item) => {
      const topLocation = item.location.y! + 1
        return !pyramid.filter((i) =>
          i.location.y === topLocation
          && (i.location.x === item.location.x || i.location.x === (item.location.x! - 1))
        ).length
      }
    )
  }

  get pyramid() {
    return this
      .material(MaterialType.Card)
      .location(LocationType.Pyramid)
      .player(this.player)
  }
}