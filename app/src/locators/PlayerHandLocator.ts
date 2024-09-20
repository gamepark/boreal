import { HandLocator, ItemContext } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'

class PlayerHandLocator extends HandLocator {
  coordinates = { y: -7 }

  getItemCoordinates(item: MaterialItem, context: ItemContext) {
    const { x = 0, y = 0, z = 0 } = super.getItemCoordinates(item, context)
    return item.selected ? { x: x - 1, y: y - 1, z: z + 1 } : { x, y, z }
  }

  getGapMaxAngle(): number {
    return 1.35
  }

  getRadius() {
    return 300
  }
}

export const playerHandLocator = new PlayerHandLocator()