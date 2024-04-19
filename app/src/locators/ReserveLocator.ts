/** @jsxImportSource @emotion/react */
import { ItemContext, LineLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { borealCardDescription } from '../material/BorealCardDescription'
import { ReserveDescription } from './description/ReserveDescription'

export class ReserveLocator extends LineLocator {
  delta = {
    y: borealCardDescription.width + 0.2,
    z: 0.05
  }

  locationDescription = new ReserveDescription()
  getCoordinates(item: MaterialItem, context: ItemContext) {
    const coordinates = this.locationDescription.getReserveCoordinate(item.location, context)

    coordinates.z = 0.05
    if (item.selected) {
      coordinates.x -= 1
      coordinates.y -= 1
    }

    return coordinates
  }

  deltaMax = { y: 25.5 }

}

export const reserveLocator = new ReserveLocator()