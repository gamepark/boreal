/** @jsxImportSource @emotion/react */
import { ItemContext, ItemLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { PyramidDescription } from './description/PyramidDescription'

export class PyramidLocator extends ItemLocator {

  locationDescription = new PyramidDescription()
  getPosition(item: MaterialItem, context: ItemContext) {
    return this.locationDescription.getPyramidSpaceCoordinates(item.location, context)
  }

  navigationSorts = [(item: MaterialItem) => item.location.y ?? 0, (item: MaterialItem) => item.location.x ?? 0]
}

export const pyramidLocator = new PyramidLocator()