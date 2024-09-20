import { getEnumValues } from '@gamepark/rules-api'

export enum PlayerColor {
  White = 1, Black
}

export const playerColors = getEnumValues(PlayerColor)
