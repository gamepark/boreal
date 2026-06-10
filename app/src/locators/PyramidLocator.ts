import { LocationType } from '@gamepark/boreal/material/LocationType'
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { PyramidHelper } from '@gamepark/boreal/rules/helper/PyramidHelper'
import { RuleId } from '@gamepark/boreal/rules/RuleId'
import { Locator, MaterialContext } from '@gamepark/react-game'
import { Location, MaterialItem, MaterialRules } from '@gamepark/rules-api'
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

  getCoordinates(location: Location, context: MaterialContext) {
    const { player, rules } = context
    const deltaX = this.getDeltaX(rules, location.player!)

    const itsFirst = location.player === (player ?? rules.players[0])
    const baseCoordinates = { x: itsFirst ? -20 : 20, y: 15, z: 0 }
    baseCoordinates.x += ((location.x! / 2) - deltaX) * (borealCardDescription.width + 0.3)
    baseCoordinates.y -= location.y! * (borealCardDescription.width + 0.3)
    return baseCoordinates
  }

  // Besides its own (x, y), a pyramid card's position only depends on deltaX, the horizontal
  // recentering of its player's pyramid. Declaring it lets every card slide simultaneously to its
  // new position whenever a card is placed on the baseline (cf. HandLocator declaring countItems).
  getPositionDependencies(location: Location, { rules }: MaterialContext) {
    return this.getDeltaX(rules, location.player!)
  }

  // Horizontal offset that keeps a player's pyramid centered: half the middle of the baseline span.
  getDeltaX(rules: MaterialRules, player: number) {
    const baseline = rules.material(MaterialType.Card).player(player).location((l) => l.type === LocationType.Pyramid && l.y === 0)
    const minX = baseline.minBy((item) => item.location.x!).getItem()?.location.x ?? 0
    const maxX = baseline.maxBy((item) => item.location.x!).getItem()?.location.x ?? 0
    return (maxX - minX) / 4 + (minX / 2)
  }

  navigationSorts = [(item: MaterialItem) => item.location.y!, (item: MaterialItem) => item.location.x!]
}

export const pyramidLocator = new PyramidLocator()
