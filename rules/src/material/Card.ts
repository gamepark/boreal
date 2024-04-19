import { isEnumValue } from '@gamepark/rules-api'

export enum Card {
  YellowStart1 = 1,
  YellowStart2,
  YellowStart3,
  Yellow4,
  Yellow5,
  Yellow6,
  Yellow7,
  Yellow8,
  Yellow9,
  RedStart1 = 11,
  RedStart2,
  RedStart3,
  Red4,
  Red5,
  Red6,
  Red7,
  Red8,
  Red9,
  BlueStart1 = 21,
  BlueStart2,
  BlueStart3,
  Blue4,
  Blue5,
  Blue6,
  Blue7,
  Blue8,
  Blue9,
  GreenStart1 = 31,
  GreenStart2,
  GreenStart3,
  Green4,
  Green5,
  Green6,
  Green7,
  Green8,
  Green9,
  Archive1 = 50,
  Archive2,
  Archive3,
  Archive4,
  Archive5,
  Archive6,
  Archive7,
  Archive8,
}

export enum CardFamily {
  Yellow = 1,
  Red,
  Blue,
  Green,
  Archive
}

export const families = Object.values(CardFamily).filter(isEnumValue)

export enum CardBack {
  Starting = 1,
  Standard
}

export const cards = Object.values(Card).filter(isEnumValue)

export const isArchive = (card: Card) => card >= 50
export const archives = cards.filter(isArchive)

export const isLocation = (card: Card) => card < 50
export const isStartingLocations = (card: Card) => card % 10 <= 3

export const standardLocations = cards.filter((c) => isLocation(c) && !isStartingLocations(c))

export const startingLocations = cards.filter((c) => isLocation(c) && isStartingLocations(c))

export type CardId = {
  front?: Card
  back: CardBack
}