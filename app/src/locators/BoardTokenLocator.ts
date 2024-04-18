/** @jsxImportSource @emotion/react */
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { PlayerColor } from '@gamepark/boreal/PlayerColor'
import { ItemLocator, MaterialContext } from '@gamepark/react-game'
import { Location, XYCoordinates } from '@gamepark/rules-api'

export class BoardTokenLocator extends ItemLocator {
  parentItemType = MaterialType.Board

  getPositionOnParent(location: Location, _context: MaterialContext): XYCoordinates {
    const deltaX = (location.x === 1? 8.3: (8.3 + ((location.x! - 1) * 11.05)))
    if (location.id === PlayerColor.White) {
      const coordinates = { x: 2.5, y: 117 }
      if (!location.x) return coordinates
      coordinates.x += deltaX
      return coordinates
    }

    const coordinates = { x: 97.55, y: -17 }
    if (!location.x) return coordinates
    coordinates.x -= deltaX
    return coordinates
  }
}

export const boardTokenLocator = new BoardTokenLocator()