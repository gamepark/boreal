/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationType } from '@gamepark/boreal/material/LocationType'
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { DropAreaDescription, LocationContext, MaterialContext } from '@gamepark/react-game'
import { isMoveItemType, Location, MaterialMove } from '@gamepark/rules-api'
import equal from 'fast-deep-equal'

export class PyramidDescription extends DropAreaDescription {

  getExtraCss(location: Location, { rules }: LocationContext) {
    const cardOnLocation = rules.material(MaterialType.Card)
      .location((l) => l.type === LocationType.Pyramid && l.x === location.x && l.y === location.y && l.player === location.player)
    if (cardOnLocation.length) return
    return css`
      border: 0.05em solid white;
    `
  }

  canShortClick(move: MaterialMove, location: Location, { rules }: MaterialContext): boolean {
    if (!isMoveItemType(MaterialType.Card)(move)) return false
    if (move.location.type === LocationType.Pyramid) {
      const selected = !!rules.material(MaterialType.Card).getItem(move.itemIndex).selected
      return selected && equal(location, move.location)
    }
    return false
  }
}