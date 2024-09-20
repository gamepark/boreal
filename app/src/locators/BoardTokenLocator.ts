/** @jsxImportSource @emotion/react */
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { PlayerColor } from '@gamepark/boreal/PlayerColor'
import { ListLocator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'

class BoardTokenLocator extends ListLocator {
  parentItemType = MaterialType.Board

  getPositionOnParent(location: Location, _context: MaterialContext) {
    const deltaY = (location.x === 1 ? 8.3 : (8.3 + ((location.x! - 1) * 11.05)))
    if (location.id === PlayerColor.White) {
      const coordinates = { x: -17, y: 2.5 }
      if (!location.x) return coordinates
      coordinates.y += deltaY
      return coordinates
    }

    const coordinates = { x: 117, y: 97.55 }
    if (!location.x) return coordinates
    coordinates.y -= deltaY
    return coordinates
  }
}

export const boardTokenLocator = new BoardTokenLocator()