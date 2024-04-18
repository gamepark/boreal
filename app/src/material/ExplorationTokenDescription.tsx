/** @jsxImportSource @emotion/react */
import { PlayerColor } from '@gamepark/boreal/PlayerColor'
import { ItemContext, TokenDescription } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import WhiteArrow from '../images/tokens/white_arrow.jpg'
import BlackArrow from '../images/tokens/black_arrow.jpg'
import Compass from '../images/tokens/compass.jpg'
import VictoryPoint from '../images/tokens/victory-point.png'
import WhitePanelBG from '../images/panel/white_player.jpg'
import BlackPanelBG from '../images/panel/black_player.jpg'
import { ExplorationTokenHelp } from './help/ExplorationTokenHelp'

export class ExplorationTokenDescription extends TokenDescription {
  height = 3
  width = 3.5

  images = {
    [PlayerColor.White]: WhiteArrow,
    [PlayerColor.Black]: BlackArrow,
  }

  getRotateZ(item: MaterialItem, _context: ItemContext): number {
    if (item.id === PlayerColor.White) {
      return 0
    }

    return 180
  }

  getImages(): string[] {
    return [
      ...super.getImages(),
      Compass,
      VictoryPoint,
      WhitePanelBG,
      BlackPanelBG
    ]
  }

  help = ExplorationTokenHelp
}

export const explorationTokenDescription = new ExplorationTokenDescription()