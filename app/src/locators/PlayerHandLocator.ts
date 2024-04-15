import { HandLocator } from '@gamepark/react-game'

export class PlayerHandLocator extends HandLocator {
  getCoordinates() {
    return { x: 0, y: -7, z: 0 }
  }

  getGapMaxAngle(): number {
    return 1.35
  }

  getRadius() {
    return 300
  }


}

export const playerHandLocator = new PlayerHandLocator()