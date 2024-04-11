/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/boreal/material/LocationType'
import { BoardDescription } from '@gamepark/react-game'
import Board from '../images/board/board.jpg'

export class GameBoardDescription extends BoardDescription {
  height = 11
  width = 70.015

  staticItem = {
    location: {
      type: LocationType.Board
    }
  }

  image = Board
}

export const gameBoardDescription = new GameBoardDescription()