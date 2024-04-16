import { Card, CardFamily } from './Card'
import { Effect, EffectType } from './CardEffect'
import { VictoryPointEffects, VictoryPointType } from './VictoryPointCondition'


export type CardDescription = {
  families?: CardFamily[]
  cost?: number
  restBonus?: number
  victoryPointEffect?: VictoryPointEffects,
  placementEffects?: Effect[],
  baselineForbidden?: boolean
}


const YellowStart1: CardDescription = {
  families: [CardFamily.Yellow],
  cost: 0,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 1
  }
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
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 2
  },
  placementEffects: [{
    type: EffectType.WinCompass,
    count: 2
  }]
}

const Yellow4: CardDescription = {
  families: [CardFamily.Yellow],
  cost: 6,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 3
  },
  placementEffects: [{
    type: EffectType.WinCompass,
    count: 3
  }]
}

const Yellow5: CardDescription = {
  families: [CardFamily.Yellow],
  cost: 6,
  restBonus: 1,
  victoryPointEffect : {
    type: VictoryPointType.PerFamily,
    points: 2,
    family: CardFamily.Green
  },
  baselineForbidden: true
}

const Yellow6: CardDescription = {
  families: [CardFamily.Yellow],
  cost: 4,
  restBonus: 2,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 1
  }
}

const Yellow7: CardDescription = {
  families: [CardFamily.Yellow],
  cost: 8,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 5
  },
  placementEffects: [{
    type: EffectType.WinCompass,
    count: 4
  }]
}

const Yellow8: CardDescription = {
  families: [CardFamily.Yellow],
  cost: 3,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.AdjacentFamily,
    points: 2,
    family: CardFamily.Blue
  }
}

const Yellow9: CardDescription = {
  families: [CardFamily.Yellow],
  cost: 5,
  restBonus: 2,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 3
  },
  baselineForbidden: true
}

const RedStart1: CardDescription = {
  families: [CardFamily.Red],
  cost: 3,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 1
  },
  placementEffects: [{
    type: EffectType.Reserve,
  }]
}

const RedStart2: CardDescription = {
  families: [CardFamily.Red],
  cost: 4,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 3
  },
  placementEffects: [{
    type: EffectType.Remove,
  }]
}

const RedStart3: CardDescription = {
  families: [CardFamily.Red],
  cost: 3,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 3
  },
  placementEffects: [{
    type: EffectType.InvertBoardCards,
  }]
}

const Red4: CardDescription = {
  families: [CardFamily.Red],
  cost: 6,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 4
  },
  placementEffects: [{
    type: EffectType.Reserve,
  }]
}

const Red5: CardDescription = {
  families: [CardFamily.Red],
  cost: 6,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.PerFamily,
    family: CardFamily.Blue,
    points: 2
  },
  baselineForbidden: true
}

const Red6: CardDescription = {
  families: [CardFamily.Red],
  cost: 3,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 3
  },
  placementEffects: [{
    type: EffectType.OpponentLooseCompass,
    count: 1
  }]
}

const Red7: CardDescription = {
  families: [CardFamily.Red],
  cost: 5,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 4
  },
  placementEffects: [{
    type: EffectType.Remove,
  }]
}

const Red8: CardDescription = {
  families: [CardFamily.Red],
  cost: 3,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.AdjacentFamily,
    points: 2,
    family: CardFamily.Green
  }
}

const Red9: CardDescription = {
  families: [CardFamily.Red],
  cost: 7,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 5
  },
  placementEffects: [{
    type: EffectType.OpponentLooseCompass,
    count: 2
  }]
}

const BlueStart1: CardDescription = {
  families: [CardFamily.Blue],
  cost: 1,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 3
  }
}

const BlueStart2: CardDescription = {
  families: [CardFamily.Blue],
  cost: 2,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 4
  }
}

const BlueStart3: CardDescription = {
  families: [CardFamily.Blue],
  cost: 3,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 5
  }
}

const Blue4: CardDescription = {
  families: [CardFamily.Blue],
  cost: 7,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 8
  }
}

const Blue5: CardDescription = {
  families: [CardFamily.Blue],
  cost: 6,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.PerFamily,
    family: CardFamily.Yellow,
    points: 2
  },
  baselineForbidden: true
}

const Blue6: CardDescription = {
  families: [CardFamily.Blue],
  cost: 3,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.AdjacentFamily,
    points: 2,
    family: CardFamily.Red
  }
}

const Blue7: CardDescription = {
  families: [CardFamily.Blue, CardFamily.Green],
  cost: 4,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 4
  }
}

const Blue8: CardDescription = {
  families: [CardFamily.Blue, CardFamily.Yellow],
  cost: 4,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 4
  }
}

const Blue9: CardDescription = {
  families: [CardFamily.Blue,
    CardFamily.Red],
  cost: 4,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 4
  }
}

const GreenStart1: CardDescription = {
  families: [CardFamily.Green],
  cost: 3,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 2
  },
  placementEffects: [{
    type: EffectType.InvertPyramidCards,
  }]
}

const GreenStart2: CardDescription = {
  families: [CardFamily.Green],
  cost: 4,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.RightCard
  }
}

const GreenStart3: CardDescription = {
  families: [CardFamily.Green],
  cost: 4,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.LeftCard
  }
}

const Green4: CardDescription = {
  families: [CardFamily.Green],
  cost: 5,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.AdjacentDifferentFamily,
    points: 2
  }
}

const Green5: CardDescription = {
  families: [CardFamily.Green],
  cost: 6,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.PerFamily,
    family: CardFamily.Red,
    points: 2
  },
  baselineForbidden: true
}

const Green6: CardDescription = {
  families: [CardFamily.Green],
  cost: 5,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Step,
    points: 2
  }
}

const Green7: CardDescription = {
  families: [CardFamily.Green],
  cost: 6,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 5
  },
  placementEffects: [{
    type: EffectType.InvertPyramidCards,
  }]
}

const Green8: CardDescription = {
  families: [CardFamily.Green],
  cost: 3,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.AdjacentFamily,
    family: CardFamily.Yellow,
    points: 2
  }
}

const Green9: CardDescription = {
  families: [CardFamily.Green],
  cost: 5,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Adjacent,
    points: 2
  }
}

const Archive1: CardDescription = {
  families: [CardFamily.Blue, CardFamily.Yellow, CardFamily.Red, CardFamily.Green],
  cost: 5,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 2
  }
}

const Archive2: CardDescription = {
  cost: 6,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.CardUnder,
  }
}

const Archive3: CardDescription = {
  cost: 3,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 4
  },
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
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.PerFamilySet,
    points: 5
  }
}

const Archive5: CardDescription = {
  cost: 5,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 4
  },
  placementEffects: [{
    type: EffectType.Pick
  }]
}

const Archive6: CardDescription = {
  cost: 8,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 10
  }
}

const Archive7: CardDescription = {
  cost: 6,
  restBonus: 3,
  victoryPointEffect: {
    type: VictoryPointType.Brut,
    points: 2
  }
}

const Archive8: CardDescription = {
  cost: 4,
  restBonus: 1,
  victoryPointEffect: {
    type: VictoryPointType.FamilyMajority,
    points: 4
  }
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

