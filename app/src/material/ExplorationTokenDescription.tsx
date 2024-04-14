/** @jsxImportSource @emotion/react */
import { PlayerColor } from '@gamepark/boreal/PlayerColor'
import { ItemContext, TokenDescription } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import BlackToken from '../images/tokens/black_token.jpg'
import WhiteToken from '../images/tokens/white_token.jpg'
import Compass from '../images/tokens/compass.jpg'
import VictoryPoint from '../images/tokens/victory-point.png'
import WhitePanelBG from '../images/panel/white_player.jpg'
import BlackPanelBG from '../images/panel/black_player.jpg'

export class ExplorationTokenDescription extends TokenDescription {
  height = 3
  width = 3.5

  images = {
    [PlayerColor.Black]: BlackToken,
    [PlayerColor.White]: WhiteToken,
  }

  getRotateZ(item: MaterialItem, _context: ItemContext): number {
    if (item.id === PlayerColor.Black) {
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
}

export const explorationTokenDescription = new ExplorationTokenDescription()