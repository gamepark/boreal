import { ItemLocator } from '@gamepark/react-game'

export class BoardLocator extends ItemLocator {
  position = { x: 0, y: -20}

}

export const boardLocator = new BoardLocator()