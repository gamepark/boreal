/** @jsxImportSource @emotion/react */
import { PlayerColor } from '@gamepark/boreal/PlayerColor'
import { Locator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'

class BoardLocator extends Locator {
  coordinates = { y: -20 }

  getRotateZ(_: Location, { rules, player = rules.players[0] }: MaterialContext) {
    return player === PlayerColor.Black ? 90 : -90
  }
}

export const boardLocator = new BoardLocator()