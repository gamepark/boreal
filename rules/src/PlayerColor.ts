import { isEnumValue } from '@gamepark/rules-api'

export enum PlayerColor {
  White = 1, Black
}

export const playerColors = Object.values(PlayerColor).filter(isEnumValue)
