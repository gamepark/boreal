/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/boreal/material/LocationType'
import { LocationDescription } from '@gamepark/react-game'
import { borealCardDescription } from '../../material/BorealCardDescription'

export class DestroyedCardDescription extends LocationDescription {
  height = borealCardDescription.height + 1
  width = borealCardDescription.width + 1
  borderRadius = borealCardDescription.borderRadius
  location = { type: LocationType.Destroyed }
  coordinates = { x: 41, y: -19, z: 20 }
}