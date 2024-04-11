/** @jsxImportSource @emotion/react */
import { DeckLocator } from '@gamepark/react-game'

export class CardDeckLocator extends DeckLocator {
  delta = { x: -0.05, y: -0.05 }
  coordinates = { x: -40, y: -20, z: 0}
}

export const cardDeckLocator = new CardDeckLocator()