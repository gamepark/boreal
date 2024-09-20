/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/boreal/material/LocationType'
import { ItemContext, ListLocator, MaterialContext } from '@gamepark/react-game'
import { Location, MaterialItem } from '@gamepark/rules-api'
import { borealCardDescription } from '../material/BorealCardDescription'
import { ReserveDescription } from './description/ReserveDescription'

class ReserveLocator extends ListLocator {

  locationDescription = new ReserveDescription()

  getLocations({ player }: MaterialContext) {
    return !player ? [] : [{ type: LocationType.Reserve, player: player }]
  }

  getCoordinates(location: Location, { rules, player = rules.players[0] }: MaterialContext) {
    return { x: location.player === player ? -45 : 45, y: -10.5 }
  }

  getItemCoordinates(item: MaterialItem, context: ItemContext) {
    const { x = 0, y = 0, z } = super.getItemCoordinates(item, context)
    return item.selected ? { x: x - 1, y: y - 1, z } : { x, y, z }
  }

  gap = { y: borealCardDescription.width + 0.2 }
  maxGap = { y: 25.5 }
}

export const reserveLocator = new ReserveLocator()