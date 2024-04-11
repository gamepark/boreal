import { Card, CardFamily } from './Card'
import { Effect, EffectType } from './CardEffect'


export type CardDescription = {
  families?: CardFamily[]
  cost?: number
  restBonus?: number
  victoryPoints?: number,
  placementEffects?: Effect[]
}


const YellowStart1: CardDescription = {
  families: [CardFamily.Yellow],
  cost: 0,
  restBonus: 1,
  victoryPoints: 1
}

const YellowStart2: CardDescription = {
  families: [CardFamily.Yellow],
  cost: 0,
  restBonus: 1,
  placementEffects: [{
    type: EffectType.WinCompass,
    count: 1
  }]
}

const YellowStart3: CardDescription = {
  families: [CardFamily.Yellow],
  cost: 3,
  restBonus: 1,
  victoryPoints: 2,
  placementEffects: [{
    type: EffectType.WinCompass,
    count: 2
  }]
}

const Yellow4: CardDescription = {
  families: [CardFamily.Yellow],
  cost: 6,
  restBonus: 1,
  victoryPoints: 3,
  placementEffects: [{
    type: EffectType.WinCompass,
    count: 3
  }]
}

const Yellow5: CardDescription = {
  families: [CardFamily.Yellow],
  cost: 6,
  restBonus: 1 /*victoryPoints: 3 TODO: points per color */
}

const Yellow6: CardDescription = {
  families: [CardFamily.Yellow],
  cost: 4,
  restBonus: 2,
  victoryPoints: 1
}

const Yellow7: CardDescription = {
  families: [CardFamily.Yellow],
  cost: 8,
  restBonus: 1,
  victoryPoints: 5,
  placementEffects: [{
    type: EffectType.WinCompass,
    count: 4
  }]
}

const Yellow8: CardDescription = {
  families: [CardFamily.Yellow],
  cost: 3,
  restBonus: 1 /*victoryPoints: 3 TODO: points per different adjacent family */
}

const Yellow9: CardDescription = {
  families: [CardFamily.Yellow],
  cost: 5,
  restBonus: 2,
  victoryPoints: 3
}

const RedStart1: CardDescription = {
  families: [CardFamily.Red],
  cost: 3,
  restBonus: 1,
  victoryPoints: 1,
  placementEffects: [{
    type: EffectType.Reserve,
  }]
}

const RedStart2: CardDescription = {
  families: [CardFamily.Red],
  cost: 4,
  restBonus: 1,
  victoryPoints: 3,
  placementEffects: [{
    type: EffectType.Remove,
  }]
}

const RedStart3: CardDescription = {
  families: [CardFamily.Red],
  cost: 3,
  restBonus: 1,
  victoryPoints: 3,
  placementEffects: [{
    type: EffectType.InverseBoardCards,
  }]
}

const Red4: CardDescription = {
  families: [CardFamily.Red],
  cost: 6,
  restBonus: 1,
  victoryPoints: 4,
  placementEffects: [{
    type: EffectType.Reserve,
  }]
}

const Red5: CardDescription = {
  families: [CardFamily.Red],
  cost: 6,
  restBonus: 1 /*victoryPoints: 3 TODO: points per color */
}

const Red6: CardDescription = {
  families: [CardFamily.Red],
  cost: 3,
  restBonus: 1,
  victoryPoints: 3,
  placementEffects: [{
    type: EffectType.OpponentLooseCompass,
    count: 1
  }]
}

const Red7: CardDescription = {
  families: [CardFamily.Red],
  cost: 5,
  restBonus: 1,
  victoryPoints: 4,
  placementEffects: [{
    type: EffectType.Remove,
  }]
}

const Red8: CardDescription = {
  families: [CardFamily.Red],
  cost: 3,
  restBonus: 1 /*victoryPoints: 3 TODO: points per different adjacent family */
}

const Red9: CardDescription = {
  families: [CardFamily.Red],
  cost: 7,
  restBonus: 1,
  victoryPoints: 5,
  placementEffects: [{
    type: EffectType.OpponentLooseCompass,
    count: 2
  }]
}

const BlueStart1: CardDescription = {
  families: [CardFamily.Blue],
  cost: 1,
  restBonus: 1,
  victoryPoints: 3
}

const BlueStart2: CardDescription = {
  families: [CardFamily.Blue],
  cost: 2,
  restBonus: 1,
  victoryPoints: 4
}

const BlueStart3: CardDescription = {
  families: [CardFamily.Blue],
  cost: 3,
  restBonus: 1,
  victoryPoints: 5
}

const Blue4: CardDescription = {
  families: [CardFamily.Blue],
  cost: 7,
  restBonus: 1,
  victoryPoints: 8
}

const Blue5: CardDescription = {
  families: [CardFamily.Blue],
  cost: 6,
  restBonus: 1 /*victoryPoints: 3 TODO: points per color */
}

const Blue6: CardDescription = {
  families: [CardFamily.Blue],
  cost: 3,
  restBonus: 1 /*victoryPoints: 3 TODO: points per different adjacent family */
}

const Blue7: CardDescription = {
  families: [CardFamily.Blue, CardFamily.Green],
  cost: 4,
  restBonus: 1,
  victoryPoints: 4
}

const Blue8: CardDescription = {
  families: [CardFamily.Blue, CardFamily.Yellow],
  cost: 4,
  restBonus: 1,
  victoryPoints: 3
}

const Blue9: CardDescription = {
  families: [CardFamily.Blue,
    CardFamily.Red],
  cost: 4,
  restBonus: 1,
  victoryPoints: 4
}

const GreenStart1: CardDescription = {
  families: [CardFamily.Green],
  cost: 3,
  restBonus: 1,
  victoryPoints: 2,
  placementEffects: [{
    type: EffectType.InversePyramidCards,
  }]
}

const GreenStart2: CardDescription = {
  families: [CardFamily.Green],
  cost: 4,
  restBonus: 1 /*TODO: ette carte vaut autant de Points de Victoire que la carte située directement à sa droite.*/
}

const GreenStart3: CardDescription = {
  families: [CardFamily.Green],
  cost: 4,
  restBonus: 1 /*TODO: ette carte vaut autant de Points de Victoire que la carte située directement à sa gauche.*/
}

const Green4: CardDescription = {
  families: [CardFamily.Green],
  cost: 5,
  restBonus: 1 /*victoryPoints: 3 TODO: points per different adjacent family */
}

const Green5: CardDescription = {
  families: [CardFamily.Green],
  cost: 6,
  restBonus: 1 /*victoryPoints: 3 TODO: points per color */
}

const Green6: CardDescription = {
  families: [CardFamily.Green],
  cost: 5,
  restBonus: 1 /*victoryPoints: 3 TODO: points depending on step */
}

const Green7: CardDescription = {
  families: [CardFamily.Green],
  cost: 6,
  restBonus: 1,
  victoryPoints: 5,
  placementEffects: [{
    type: EffectType.InversePyramidCards,
  }]
}

const Green8: CardDescription = {
  families: [CardFamily.Green],
  cost: 3,
  restBonus: 1 /*victoryPoints: 3 TODO: points per color around */
}

const Green9: CardDescription = {
  families: [CardFamily.Green],
  cost: 5,
  restBonus: 1 /*victoryPoints: 3 TODO: points per color around */
}

const Archive1: CardDescription = {
  families: [CardFamily.Blue, CardFamily.Yellow, CardFamily.Red, CardFamily.Green],
  cost: 5,
  restBonus: 1,
  victoryPoints: 2
}

const Archive2: CardDescription = {
  cost: 6,
  restBonus: 1 /*TODO: victory points per card under*/
}

const Archive3: CardDescription = {
  cost: 3,
  restBonus: 1,
  victoryPoints: 4,
  placementEffects: [{
    type: EffectType.WinCompass,
    count: 1
  }, {
    type: EffectType.OpponentLooseCompass,
    count: 1
  }]
}

const Archive4: CardDescription = {
  cost: 6,
  restBonus: 1 /*TODO: group of 4 diff colors*/
}

const Archive5: CardDescription = {
  cost: 5,
  restBonus: 1,
  victoryPoints: 4,
  placementEffects: [{
    type: EffectType.Pick
  }]
}

const Archive6: CardDescription = {
  cost: 8,
  restBonus: 1,
  victoryPoints: 10
}

const Archive7: CardDescription = {
  cost: 6,
  restBonus: 3,
  victoryPoints: 2
}

const Archive8: CardDescription = {
  cost: 4,
  restBonus: 1 /*TODO: points per majority or each color */
}

export const Cards: Partial<Record<Card, CardDescription>> = {
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

