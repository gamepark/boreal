/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/boreal/material/LocationType'
import { PlayerColor } from '@gamepark/boreal/PlayerColor'
import { LocationContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api/dist/material/location/Location'
import { borealCardDescription } from '../../material/BorealCardDescription'

export class BoardCardDescription extends LocationDescription {
  height = borealCardDescription.height
  width = borealCardDescription.width
  borderRadius = borealCardDescription.borderRadius

  getLocations() {
    return Array.from(Array(8)).map((_, index) => ({
      type: LocationType.BoardCard,
      x: index
    }))
  }

  coordinates = { x: -27, y: -20, z: 0.05}

  getCoordinates(location: Location, context: LocationContext) {
    const coordinates = { x: -27, y: -20, z: 20}
    const index = this.getIndex(location, context)
    coordinates.x += (borealCardDescription.width + 0.705) * index
    return coordinates
  }

  getIndex(location: Location, context: MaterialContext): number {
    const { player, rules } = context
    if (PlayerColor.White === (player ?? rules.players[0])) {
      return 7 - location.x!
    }

    return location.x!
  }
}