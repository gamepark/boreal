/** @jsxImportSource @emotion/react */
import { Card, CardBack } from '@gamepark/boreal/material/Card'
import { CardDescription } from '@gamepark/react-game'
import Archive1 from '../images/cards/archive_1.jpg'
import Archive2 from '../images/cards/archive_2.jpg'
import Archive3 from '../images/cards/archive_3.jpg'
import Archive4 from '../images/cards/archive_4.jpg'
import Archive5 from '../images/cards/archive_5.jpg'
import Archive6 from '../images/cards/archive_6.jpg'
import Archive7 from '../images/cards/archive_7.jpg'
import Archive8 from '../images/cards/archive_8.jpg'
import Blue4 from '../images/cards/blue_4.jpg'
import Blue5 from '../images/cards/blue_5.jpg'
import Blue6 from '../images/cards/blue_6.jpg'
import Blue7 from '../images/cards/blue_7.jpg'
import Blue8 from '../images/cards/blue_8.jpg'
import Blue9 from '../images/cards/blue_9.jpg'
import BlueStart1 from '../images/cards/blue_start_1.jpg'
import BlueStart2 from '../images/cards/blue_start_2.jpg'
import BlueStart3 from '../images/cards/blue_start_3.jpg'
import Green4 from '../images/cards/green_4.jpg'
import Green5 from '../images/cards/green_5.jpg'
import Green6 from '../images/cards/green_6.jpg'
import Green7 from '../images/cards/green_7.jpg'
import Green8 from '../images/cards/green_8.jpg'
import Green9 from '../images/cards/green_9.jpg'
import GreenStart1 from '../images/cards/green_start_1.jpg'
import GreenStart2 from '../images/cards/green_start_2.jpg'
import GreenStart3 from '../images/cards/green_start_3.jpg'
import Red4 from '../images/cards/red_4.jpg'
import Red5 from '../images/cards/red_5.jpg'
import Red6 from '../images/cards/red_6.jpg'
import Red7 from '../images/cards/red_7.jpg'
import Red8 from '../images/cards/red_8.jpg'
import Red9 from '../images/cards/red_9.jpg'
import RedStart1 from '../images/cards/red_start_1.jpg'
import RedStart2 from '../images/cards/red_start_2.jpg'
import RedStart3 from '../images/cards/red_start_3.jpg'
import StandardBack from '../images/cards/standard_back.jpg'
import StartBack from '../images/cards/start_back.jpg'
import Yellow4 from '../images/cards/yellow_4.jpg'
import Yellow5 from '../images/cards/yellow_5.jpg'
import Yellow6 from '../images/cards/yellow_6.jpg'
import Yellow7 from '../images/cards/yellow_7.jpg'
import Yellow8 from '../images/cards/yellow_8.jpg'
import Yellow9 from '../images/cards/yellow_9.jpg'
import YellowStart1 from '../images/cards/yellow_start_1.jpg'
import YellowStart2 from '../images/cards/yellow_start_2.jpg'
import YellowStart3 from '../images/cards/yellow_start_3.jpg'
import YellowIcon from '../images/icons/yellow.jpg'
import BlueIcon from '../images/icons/blue.jpg'
import RedIcon from '../images/icons/red.jpg'
import GreenIcon from '../images/icons/green.jpg'
import { BorealCardHelp } from './help/BorealCardHelp'

export class BorealCardDescription extends CardDescription {
  height = 7
  width = 7
  borderRadius = 0.3

  backImages = {
    [CardBack.Starting]: StartBack,
    [CardBack.Standard]: StandardBack,

  }

  images = {
    [Card.YellowStart1]: YellowStart1,
    [Card.YellowStart2]: YellowStart2,
    [Card.YellowStart3]: YellowStart3,
    [Card.Yellow4]: Yellow4,
    [Card.Yellow5]: Yellow5,
    [Card.Yellow6]: Yellow6,
    [Card.Yellow7]: Yellow7,
    [Card.Yellow8]: Yellow8,
    [Card.Yellow9]: Yellow9,
    [Card.RedStart1]: RedStart1,
    [Card.RedStart2]: RedStart2,
    [Card.RedStart3]: RedStart3,
    [Card.Red4]: Red4,
    [Card.Red5]: Red5,
    [Card.Red6]: Red6,
    [Card.Red7]: Red7,
    [Card.Red8]: Red8,
    [Card.Red9]: Red9,
    [Card.BlueStart1]: BlueStart1,
    [Card.BlueStart2]: BlueStart2,
    [Card.BlueStart3]: BlueStart3,
    [Card.Blue4]: Blue4,
    [Card.Blue5]: Blue5,
    [Card.Blue6]: Blue6,
    [Card.Blue7]: Blue7,
    [Card.Blue8]: Blue8,
    [Card.Blue9]: Blue9,
    [Card.GreenStart1]: GreenStart1,
    [Card.GreenStart2]: GreenStart2,
    [Card.GreenStart3]: GreenStart3,
    [Card.Green4]: Green4,
    [Card.Green5]: Green5,
    [Card.Green6]: Green6,
    [Card.Green7]: Green7,
    [Card.Green8]: Green8,
    [Card.Green9]: Green9,
    [Card.Archive1]: Archive1,
    [Card.Archive2]: Archive2,
    [Card.Archive3]: Archive3,
    [Card.Archive4]: Archive4,
    [Card.Archive5]: Archive5,
    [Card.Archive6]: Archive6,
    [Card.Archive7]: Archive7,
    [Card.Archive8]: Archive8,
  }
  // getItemExtraCss(item: MaterialItem, _context: ItemContext): Interpolation<Theme> {
  //   const { rules, index } = _context
  //   if (item.location.type !== LocationType.Pyramid) return
  //   const cardScore = new ScoreHelper(rules.game, item.location.player!).getCardScore(rules.material(MaterialType.Card).index(index))
  //   return css`
  //     &:after {
  //       content: '${cardScore}';
  //       height: 100%;
  //       width: 100%;
  //       position: absolute;
  //       top: 0;
  //       font-size: 3em;
  //       left: 0;
  //       color: black;
  //       transform: translateZ(10px);
  //     }
  //   `
  // }

  help = BorealCardHelp

  getImages(): string[] {
    return [
      ...super.getImages(),
      YellowIcon,
      BlueIcon,
      RedIcon,
      GreenIcon
    ]
  }
}

export const borealCardDescription = new BorealCardDescription()