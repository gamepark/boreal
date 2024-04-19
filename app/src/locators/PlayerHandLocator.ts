import { HandLocator, ItemContext } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'

export class PlayerHandLocator extends HandLocator {

  getCoordinates() {
    return { x: 0, y: -7, z: 0 }
  }

  getPosition(item: MaterialItem, context: ItemContext) {
    const position = super.getPosition(item, context)

    if (item.selected) {
      position.x -= 1
      position.y -= 1
      position.z += 10
    }

    return position
  }

  getGapMaxAngle(): number {
    return 1.35
  }

  getRadius() {
    return 300
  }


}

export const playerHandLocator = new PlayerHandLocator()