/** @jsxImportSource @emotion/react */
import { ItemContext, LineLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { borealCardDescription } from '../material/BorealCardDescription'
import { BoardCardDescription } from './description/BoardCardDescription'

export class BoardCardLocator extends LineLocator {

  locationDescription = new BoardCardDescription()

  delta = { x: borealCardDescription.width + 0.705, z: 0 }

  getCoordinates(item: MaterialItem): Coordinates {
    const coordinates = { x: -26.95, y: -20, z: 0.05 }
    if (item.selected) {
      coordinates.x -= 1
      coordinates.y -= 1
      coordinates.z = 20
    }

    return coordinates
  }

  getItemIndex(item: MaterialItem, context: ItemContext): number {
    return this.locationDescription.getIndex(item.location, context)
  }
}

export const boardCardLocator = new BoardCardLocator()