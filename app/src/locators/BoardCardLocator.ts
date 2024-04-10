import { PlayerColor } from '@gamepark/boreal/PlayerColor'
import { ItemContext, LineLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api/dist/material/items/MaterialItem'
import { borealCardDescription } from '../material/BorealCardDescription'

export class BoardCardLocator extends LineLocator {

  delta = { x: borealCardDescription.width + 0.705, z: 0 }

  coordinates = { x: -27, y: -20, z: 0.05}

  getItemIndex(item: MaterialItem, context: ItemContext): number {
    const { player, rules } = context
    if (PlayerColor.White === (player ?? rules.players[0])) {
      return 7 - item.location.x!
    }

    return item.location.x!
  }
}

export const boardCardLocator = new BoardCardLocator()