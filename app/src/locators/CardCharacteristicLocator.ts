/** @jsxImportSource @emotion/react */
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { LocationDescription, Locator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'

export enum Characteristic {
  Cost = 1, Savior, RestBonus, Effect
}

class CardCharacteristicDescription extends LocationDescription {

  getBorderRadius(id: Characteristic) {
    return id === Characteristic.RestBonus ? 1 : 0.2
  }

  getSize(id: Characteristic) {
    switch (id) {
      case Characteristic.Cost:
        return { height: 1.2, width: 1.5 }
      case Characteristic.Savior:
        return { height: 1.5, width: 1.5 }
      case Characteristic.RestBonus:
        return { height: 2, width: 2 }
      case Characteristic.Effect:
        return { height: 1.5, width: 3 }
    }
  }
}

export const cardCharacteristicDescription = new CardCharacteristicDescription()

export class CardCharacteristicLocator extends Locator {
  locationDescription = cardCharacteristicDescription
  parentItemType = MaterialType.Card

  getPositionOnParent(location: Location) {
    if (location.id === Characteristic.Cost) return { x: 30, y: 6 }
    if (location.id === Characteristic.Savior) return { x: 90, y: 90 }
    if (location.id === Characteristic.RestBonus) return { x: 94, y: 6 }
    if (location.id === Characteristic.Effect) return { x: 80, y: 90 }
    return { x: 50, y: 81 }
  }
}

export const cardCharacteristicLocator = new CardCharacteristicLocator()

