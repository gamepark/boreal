/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationType } from '@gamepark/boreal/material/LocationType'
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { PlayerColor } from '@gamepark/boreal/PlayerColor'
import { PyramidHelper } from '@gamepark/boreal/rules/helper/PyramidHelper'
import { RuleId } from '@gamepark/boreal/rules/RuleId'
import { LocationContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location, MaterialGame, MaterialRules } from '@gamepark/rules-api'
import { borealCardDescription } from '../../material/BorealCardDescription'

export class PyramidDescription extends LocationDescription {
  height = borealCardDescription.height
  width = borealCardDescription.width
  borderRadius = borealCardDescription.borderRadius

  getLocations(context: MaterialContext) {
    const { rules, player } = context

    const locations: Location[] = []
    if (!player) return locations
    const pyramidHelper = new PyramidHelper(rules.game, player)
    if (rules.game.rule?.id === RuleId.InvertPyramidCards && rules.game?.rule.player === player) {
      const placedCards = rules.material(MaterialType.Card).player(player).location(LocationType.Pyramid).getItems()
      locations.push(
        ...placedCards.map((c) => c.location)
      )
    }
    if (rules.game.rule?.id !== RuleId.Explore || player !== rules.game.rule?.player) return locations

    locations.push(
      ...pyramidHelper.availableSpaces.flatMap((s) => ({
        type: LocationType.Pyramid,
        player: player,
        ...s
      }))
    )

    return locations
  }

  game?: MaterialGame
  alwaysVisible = true
  deltaX = {
    [PlayerColor.Black]: 0,
    [PlayerColor.White]: 0
  }

  getExtraCss(location: Location, context: LocationContext) {
    const { rules } = context
    const cardOnLocation = rules
      .material(MaterialType.Card)
      .location((l) => l.type === LocationType.Pyramid && l.x === location.x && l.y === location.y && l.player === location.player)
    if (!cardOnLocation.length) {
      return css`
        border: 0.05em solid white;
      `
    }

    return css`
      pointer-events: none;
    `
  }

  getCoordinates(location: Location, context: LocationContext) {
    return this.getPyramidSpaceCoordinates(location, context)
  }

  getPyramidSpaceCoordinates(location: Location, context: MaterialContext) {
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

  canLongClick() {
    return false
  }
}