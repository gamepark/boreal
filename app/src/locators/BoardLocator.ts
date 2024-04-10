import { PlayerColor } from '@gamepark/boreal/PlayerColor'
import { ItemContext, ItemLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'

export class BoardLocator extends ItemLocator {
  position = { x: 0, y: -20}

  getRotateZ(_item: MaterialItem, { player }: ItemContext): number {
    if (player && player === PlayerColor.White) return 180
    return 0
  }

}

export const boardLocator = new BoardLocator()