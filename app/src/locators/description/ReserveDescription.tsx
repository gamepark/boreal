/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/boreal/material/LocationType'
import { LocationContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { borealCardDescription } from '../../material/BorealCardDescription'

export class ReserveDescription extends LocationDescription {
  height = borealCardDescription.height
  width = borealCardDescription.width
  borderRadius = borealCardDescription.borderRadius

  getLocations(context: MaterialContext) {
    const { player} = context
    if (!player) return []
    return [{
      type: LocationType.Reserve,
      player: player
    }]
  }

  getSize(_location: Location, _context: MaterialContext) {
    return {
      height: borealCardDescription.height * 5.3,
      width: borealCardDescription.width
    }
  }


  getCoordinates(location: Location, context: LocationContext) {
    const coordinates = this.getReserveCoordinate(location, context)
    coordinates.z = 20
    coordinates.y = borealCardDescription.height * 1.42
    return coordinates
  }

  getReserveCoordinate(location: Location, context: MaterialContext) {
    const { player, rules } = context
    if (location.player === (player ?? rules.players[0])) {
      return { x: -45, y: -5, z: 0 }
    }
    return { x: 45, y: -5, z: 0 }
  }
}