/** @jsxImportSource @emotion/react */
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { ItemLocator, LocationDescription } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'

export enum Characteristic {
  Cost = 1, Savior, RestBonus
}

class CardCharacteristicDescription extends LocationDescription {

  getBorderRadius(location: Location) {
    if (location.id === Characteristic.Cost) return 0.2
    if (location.id === Characteristic.Savior) return 0.2
    if (location.id === Characteristic.RestBonus) return 1
    return 0
  }


  getSize(location: Location) {
    if (location.id === Characteristic.Cost) return { height: 1.2, width: 1.5 }
    if (location.id === Characteristic.Savior) return { height: 1.5, width: 1.5 }
    if (location.id === Characteristic.RestBonus) return { height: 2, width: 2 }
    return { height: 0, width: 0 }
  }
}

export const cardCharacteristicDescription = new CardCharacteristicDescription()

export class CardCharacteristicLocator extends ItemLocator {
  locationDescription = cardCharacteristicDescription
  parentItemType = MaterialType.Card

  getPositionOnParent(location: Location) {
    if (location.id === Characteristic.Cost) return { x: 30, y: 6 }
    if (location.id === Characteristic.Savior) return { x: 90, y: 90 }
    if (location.id === Characteristic.RestBonus) return { x: 94, y: 6 }
    return { x: 50, y: 81 }
  }
}

export const cardCharacteristicLocator = new CardCharacteristicLocator()

