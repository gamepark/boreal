/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationType } from '@gamepark/boreal/material/LocationType'
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { isLocationSubset, LocationContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { isMoveItemType, Location, MaterialMove } from '@gamepark/rules-api'
import { Trans } from 'react-i18next'
import { borealCardDescription } from '../../material/BorealCardDescription'

export class ReserveDescription extends LocationDescription {
  height = borealCardDescription.height
  width = borealCardDescription.width
  borderRadius = borealCardDescription.borderRadius

  getLocations(context: MaterialContext) {
    const { player } = context
    if (!player) return []
    return [{
      type: LocationType.Reserve,
      player: player
    }]
  }

  getSize(_location: Location, _context: MaterialContext) {
    return {
      height: borealCardDescription.height * 4.65,
      width: borealCardDescription.width
    }
  }


  getCoordinates(location: Location, context: LocationContext) {
    const coordinates = this.getReserveCoordinate(location, context)
    coordinates.z = 0
    coordinates.y += 12.75
    return coordinates
  }

  getReserveCoordinate(location: Location, context: MaterialContext) {
    const { player, rules } = context
    if (location.player === (player ?? rules.players[0])) {
      return { x: -45, y: -10.5, z: 0 }
    }
    return { x: 45, y: -10.5, z: 0 }
  }

  content = () => {
    return (
      <div css={reserveTextCss}>
        <Trans defaults="help.reserve.text"/>
      </div>
    )
  }

  canShortClick(move: MaterialMove, location: Location, context: MaterialContext): boolean {
    const { rules } = context
    if (!isMoveItemType(MaterialType.Card)(move)) return false
    if (move.location.type === LocationType.Reserve) {
      const selected = !!rules.material(MaterialType.Card).getItem(move.itemIndex)!.selected
      return selected && isLocationSubset(move.location, location)
    }

    return false
  }

  canLongClick(): boolean {
    return false
  }
}

const reserveTextCss = css`
  position: absolute;
  height: 100%;
  width: 100%;
  writing-mode: vertical-rl;
  text-orientation: upright;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 2em;
  font-weight: bold
`