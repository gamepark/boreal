import { Location } from '@gamepark/rules-api'

export const isAdjacent = (location1: Location, location2: Location) => {
  return (Math.abs(location2.x! - location1.x!) + Math.abs(location2.y! - location1.y!)) === 2
}