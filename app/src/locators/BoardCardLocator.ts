/** @jsxImportSource @emotion/react */
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { PlayerColor } from '@gamepark/boreal/PlayerColor'
import { ItemContext, ListLocator, MaterialContext, SortFunction } from '@gamepark/react-game'
import { Location, MaterialItem } from '@gamepark/rules-api'
import { boardLocator } from './BoardLocator'

class BoardCardLocator extends ListLocator {
  parentItemType = MaterialType.Board
  positionOnParent = { x: 50, y: 11.5 }
  gap = { y: 7.705 }

  getItemCoordinates(item: MaterialItem, context: ItemContext) {
    const { x = 0, y = 0, z = 0 } = super.getItemCoordinates(item, context)
    return item.selected ? { x: x - 1, y: y - 1, z: z + 1 } : { x, y, z }
  }

  getRotateZ(location: Location, context: MaterialContext) {
    return -boardLocator.getRotateZ(location, context)
  }

  getNavigationSorts({ rules, player = rules.players[0] }: ItemContext): SortFunction[] {
    return [player === PlayerColor.Black ? item => -item.location.x! : item => item.location.x!]
  }
}

export const boardCardLocator = new BoardCardLocator()