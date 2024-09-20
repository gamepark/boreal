import { LocationType } from '@gamepark/boreal/material/LocationType'
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { PlayerColor } from '@gamepark/boreal/PlayerColor'
import { DeckLocator, Locator, PileLocator } from '@gamepark/react-game'
import { boardCardLocator } from './BoardCardLocator'
import { boardLocator } from './BoardLocator'
import { boardTokenLocator } from './BoardTokenLocator'
import { cardCharacteristicLocator } from './CardCharacteristicLocator'
import { playerHandLocator } from './PlayerHandLocator'
import { pyramidLocator } from './PyramidLocator'
import { reserveLocator } from './ReserveLocator'

export const Locators: Partial<Record<LocationType, Locator<PlayerColor, MaterialType, LocationType>>> = {
  [LocationType.BoardToken]: boardTokenLocator,
  [LocationType.Board]: boardLocator,
  [LocationType.Deck]: new DeckLocator({ coordinates: { x: -40, y: -19 } }),
  [LocationType.BoardCard]: boardCardLocator,
  [LocationType.Pyramid]: pyramidLocator,
  [LocationType.Reserve]: reserveLocator,
  [LocationType.Destroyed]: new PileLocator({ coordinates: { x: 41, y: -19 }, maxAngle: 10 }),
  [LocationType.Hand]: playerHandLocator,
  [LocationType.CardCharacteristics]: cardCharacteristicLocator
}
