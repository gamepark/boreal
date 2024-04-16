/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/boreal/material/LocationType'
import { BoardDescription } from '@gamepark/react-game'
import Board from '../images/board/board.jpg'
import { GameBoardHelp } from './help/GameBoardHelp'

export class GameBoardDescription extends BoardDescription {
  height = 11
  width = 70.015

  staticItem = {
    location: {
      type: LocationType.Board
    }
  }

  image = Board
  help = GameBoardHelp
}

export const gameBoardDescription = new GameBoardDescription()