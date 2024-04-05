import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { MaterialDescription } from '@gamepark/react-game'
import { gameBoardDescription } from './GameBoardDescription'
import { borealCardDescription } from './BorealCardDescription'
import { explorationTokenDescription } from './ExplorationTokenDescription'

export const Material: Partial<Record<MaterialType, MaterialDescription>> = {
  [MaterialType.Card]: borealCardDescription,
  [MaterialType.ExplorationToken]: explorationTokenDescription,
  [MaterialType.Board]: gameBoardDescription
}
