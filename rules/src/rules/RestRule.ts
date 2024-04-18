import { MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { PlayerColor } from '../PlayerColor'
import { PyramidHelper } from './helper/PyramidHelper'
import { RuleId } from './RuleId'

export class RestRule extends PlayerTurnRule {
  onRuleStart() {
    const wonCompass = this.wonCompass

    const moves: MaterialMove[] = []
    if (wonCompass) {
      moves.push(
        this.explorationToken.moveItem((item) => ({
          ...item.location,
          x: Math.min(8, item.location.x! + wonCompass)
        }))
      )
    }

    if (this.isOnePyramidCompleted && this.player === PlayerColor.Black) {
      return [
        this.rules().endGame()
      ]
    }

    moves.push(
      this.rules().startPlayerTurn(RuleId.Explore, this.nextPlayer)
    )

    return moves
  }

  get isOnePyramidCompleted() {
    return this.game.players.some((p) =>
      this.material(MaterialType.Card).location(LocationType.Pyramid).player(p).length === 10
    )
  }

  get wonCompass() {
    let wonCompass = new PyramidHelper(this.game, this.player).restBonus
    const compass = this.compass
    if (compass === 8) return 0
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
}