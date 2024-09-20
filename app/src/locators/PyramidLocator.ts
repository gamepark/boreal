/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/boreal/material/LocationType'
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { PlayerColor } from '@gamepark/boreal/PlayerColor'
import { PyramidHelper } from '@gamepark/boreal/rules/helper/PyramidHelper'
import { RuleId } from '@gamepark/boreal/rules/RuleId'
import { Locator, MaterialContext } from '@gamepark/react-game'
import { Location, MaterialGame, MaterialItem, MaterialRules } from '@gamepark/rules-api'
import { borealCardDescription } from '../material/BorealCardDescription'
import { PyramidDescription } from './description/PyramidDescription'

class PyramidLocator extends Locator {

  locationDescription = new PyramidDescription(borealCardDescription)

  getLocations({ rules, player }: MaterialContext) {
    if (rules.game.rule?.id !== RuleId.Explore || player !== rules.game.rule.player) return []

    const pyramidHelper = new PyramidHelper(rules.game, player!)
    return pyramidHelper.availableSpaces.flatMap(space => ({
      type: LocationType.Pyramid,
      player: player,
      ...space
    }))
  }

  game?: MaterialGame
  deltaX = {
    [PlayerColor.White]: 0,
    [PlayerColor.Black]: 0
  }

  getCoordinates(location: Location, context: MaterialContext) {
    const { player, rules } = context
    if (rules.game !== this.game && (!this.game || rules.game?.rule?.id === RuleId.Explore)) {
      this.refreshDeltaX(rules)
      this.game = rules.game
    }

    const itsFirst = location.player === (player ?? rules.players[0])
    const baseCoordinates = { x: itsFirst ? -20 : 20, y: 15, z: 0 }
    baseCoordinates.x += ((location.x! / 2) - this.deltaX[location.player!]) * (borealCardDescription.width + 0.3)
    baseCoordinates.y -= location.y! * (borealCardDescription.width + 0.3)
    return baseCoordinates
  }

  refreshDeltaX(rules: MaterialRules) {
    for (const player of rules.players) {
      const baseline = rules.material(MaterialType.Card).player(player).location((l) => l.type === LocationType.Pyramid && l.y === 0)
      const minX = baseline.minBy((item) => item.location.x!).getItem()?.location.x ?? 0
      const maxX = baseline.maxBy((item) => item.location.x!).getItem()?.location.x ?? 0

      this.deltaX[player] = (maxX - minX) / 4 + (minX / 2)
    }
  }

  navigationSorts = [(item: MaterialItem) => item.location.y!, (item: MaterialItem) => item.location.x!]
}

export const pyramidLocator = new PyramidLocator()