/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationType } from '@gamepark/boreal/material/LocationType'
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { PyramidHelper } from '@gamepark/boreal/rules/helper/PyramidHelper'
import { RuleId } from '@gamepark/boreal/rules/RuleId'
import { LocationContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { range } from 'lodash'
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
    if (rules.game.rule?.id === RuleId.InversePyramidCards && rules.game?.rule.player === player) {
      const placedCards = rules.material(MaterialType.Card).player(player).location(LocationType.Pyramid).getItems()
      locations.push(
        ...placedCards.map((c) => c.location)
      )
    }

    locations.push(
      ...pyramidHelper.availableSpaces.flatMap((s) => ({
        type: LocationType.Pyramid,
        player: player,
        ...s
      }))
    )

    return locations
  }

  alwaysVisible = true

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
    const itsFirst = location.player === (player ?? rules.players[0])
    const baseCoordinates = { x: itsFirst ? -21 : 20, y: 17, z: 0 }
    const baseline = rules.material(MaterialType.Card).location((l) => l.type === LocationType.Pyramid && l.player === location.player && l.y === 0)
    const minX = baseline.minBy((item) => item.location.x!).getItem()?.location.x
    const maxX = baseline.maxBy((item) => item.location.x!).getItem()?.location.x
    if (baseline.length > 1) {
      baseCoordinates.x -= ((baseline.length - 1) / 2) * borealCardDescription.width
    }

    baseCoordinates.x += location.y! * (borealCardDescription.width * 0.5)
    baseCoordinates.x += this.getCardIndex(minX, maxX, location.x!, location.y!) * (borealCardDescription.width + 0.3)
    baseCoordinates.y -= location.y! * (borealCardDescription.width + 0.3)

    return baseCoordinates
  }

  getCardIndex(minX: number | undefined, maxX: number | undefined, x: number, y: number) {
    if (minX === undefined || maxX === undefined) return 0
    return range(minX, maxX + (y === 0 ? 2 : 1)).indexOf(x)
  }

  canLongClick() {
    return false
  }
}