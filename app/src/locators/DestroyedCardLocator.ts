/** @jsxImportSource @emotion/react */
import { PileLocator } from '@gamepark/react-game'
import { DestroyedCardDescription } from './description/DestroyedCardDescription'

export class DestroyedCardLocator extends PileLocator {
  locationDescription = new DestroyedCardDescription()

  coordinates = {
    ...this.locationDescription.coordinates,
    z: 0
  }

  maxAngle = 10
}

export const destroyedCardLocator = new DestroyedCardLocator()