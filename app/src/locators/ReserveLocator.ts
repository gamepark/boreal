/** @jsxImportSource @emotion/react */
import { ItemContext, LineLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { borealCardDescription } from '../material/BorealCardDescription'
import { ReserveDescription } from './description/ReserveDescription'

export class ReserveLocator extends LineLocator {
  delta = {
    y: borealCardDescription.width + 0.2
  }

  locationDescription = new ReserveDescription()
  getCoordinates(item: MaterialItem, context: ItemContext) {
    return this.locationDescription.getReserveCoordinate(item.location, context)
  }

  deltaMax = { y: 22 }

}

export const reserveLocator = new ReserveLocator()