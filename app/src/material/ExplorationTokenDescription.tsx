import { PlayerColor } from '@gamepark/boreal/PlayerColor'
import { ItemContext, TokenDescription } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import BlackToken from '../images/tokens/black_token.jpg'
import WhiteToken from '../images/tokens/white_token.jpg'

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
}

export const explorationTokenDescription = new ExplorationTokenDescription()