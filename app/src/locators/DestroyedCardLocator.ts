/** @jsxImportSource @emotion/react */
import { PileLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { DestroyedCardDescription } from './description/DestroyedCardDescription'

export class DestroyedCardLocator extends PileLocator {
  locationDescription = new DestroyedCardDescription()

  getCoordinates(item: MaterialItem): Coordinates {
    return {
      ...this.locationDescription.coordinates,
      z: 0.05 * item.location.x!
    }
  }

  maxAngle = 10
}

export const destroyedCardLocator = new DestroyedCardLocator()