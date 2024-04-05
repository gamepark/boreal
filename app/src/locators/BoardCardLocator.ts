import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { LineLocator } from '@gamepark/react-game'
import { borealCardDescription } from '../material/BorealCardDescription'

export class BoardCardLocator extends LineLocator {
  parentItemType = MaterialType.Board

  delta = { x: borealCardDescription.width + 0.705, z: 0 }

  positionOnParent = { x: 11.5, y: 50 }
}

export const boardCardLocator = new BoardCardLocator()