/** @jsxImportSource @emotion/react */
import { ItemContext, LineLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { borealCardDescription } from '../material/BorealCardDescription'
import { BoardCardDescription } from './description/BoardCardDescription'

export class BoardCardLocator extends LineLocator {

  locationDescription = new BoardCardDescription()

  delta = { x: borealCardDescription.width + 0.705, z: 0 }

  coordinates = { x: -27, y: -20, z: 0.05 }

  getItemIndex(item: MaterialItem, context: ItemContext): number {
    return this.locationDescription.getIndex(item.location, context)
  }
}

export const boardCardLocator = new BoardCardLocator()