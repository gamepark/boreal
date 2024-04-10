import { LocationType } from '@gamepark/boreal/material/LocationType'
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { PlayerColor } from '@gamepark/boreal/PlayerColor'
import { ItemLocator } from '@gamepark/react-game'
import { boardCardLocator } from './BoardCardLocator'
import { boardLocator } from './BoardLocator'
import { boardTokenLocator } from './BoardTokenLocator'
import { cardDeckLocator } from './CardDeckLocator'
import { pyramidLocator } from './PyramidLocator'
import { reserveLocator } from './ReserveLocator'

export const Locators: Partial<Record<LocationType, ItemLocator<PlayerColor, MaterialType, LocationType>>> = {
  [LocationType.BoardToken]: boardTokenLocator,
  [LocationType.Board]: boardLocator,
  [LocationType.Deck]: cardDeckLocator,
  [LocationType.BoardCard]: boardCardLocator,
  [LocationType.Pyramid]: pyramidLocator,
  [LocationType.Reserve]: reserveLocator
}
