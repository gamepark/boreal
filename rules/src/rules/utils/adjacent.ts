import { Location } from '@gamepark/rules-api'

export const isAdjacent = (location1: Location, location2: Location) => {
  const distanceX = Math.abs(location2.x! - location1.x!)
  const distanceY = Math.abs(location2.y! - location1.y!)
  return distanceY < 2 && (distanceX + distanceY === 2)
}