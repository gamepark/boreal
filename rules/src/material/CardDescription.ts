import { Card, CardFamily } from './Card'

export type CardDescription = {
  families: CardFamily[]
  cost?: number
  restBonus?: number
  victoryPoints?: number
}

export const Descriptions: Partial<Record<Card, CardDescription>> = {
  [Card.YellowStart1]: { families: [CardFamily.Yellow], cost: 0, restBonus: 1, victoryPoints: 1 },
  [Card.YellowStart2]: { families: [CardFamily.Yellow], cost: 0, restBonus: 1 },
  [Card.YellowStart3]: { families: [CardFamily.Yellow], cost: 3, restBonus: 1, victoryPoints: 2 },
  [Card.Yellow4]: { families: [CardFamily.Yellow], cost: 6, restBonus: 1, victoryPoints: 3 },
  [Card.Yellow5]: { families: [CardFamily.Yellow], cost: 6, restBonus: 1, /*victoryPoints: 3 TODO: points per color */ },
  [Card.Yellow6]: { families: [CardFamily.Yellow], cost: 4, restBonus: 2, victoryPoints: 1 },
  [Card.Yellow7]: { families: [CardFamily.Yellow], cost: 8, restBonus: 1, victoryPoints: 5 },
  [Card.Yellow8]: { families: [CardFamily.Yellow], cost: 3, restBonus: 1, /*victoryPoints: 3 TODO: points per different adjacent family */ },
  [Card.Yellow9]: { families: [CardFamily.Yellow], cost: 5, restBonus: 2, victoryPoints: 3 },

  [Card.RedStart1]: { families: [CardFamily.Red], cost: 3, restBonus: 1, victoryPoints: 1 },
  [Card.RedStart2]: { families: [CardFamily.Red], cost: 4, restBonus: 1, victoryPoints: 3 },
  [Card.RedStart3]: { families: [CardFamily.Red], cost: 3, restBonus: 1, victoryPoints: 3 },
  [Card.Red4]: { families: [CardFamily.Red], cost: 6, restBonus: 1, victoryPoints: 4 },
  [Card.Red5]: { families: [CardFamily.Red], cost: 6, restBonus: 1, /*victoryPoints: 3 TODO: points per color */ },
  [Card.Red6]: { families: [CardFamily.Red], cost: 3, restBonus: 1, victoryPoints: 3 },
  [Card.Red7]: { families: [CardFamily.Red], cost: 5, restBonus: 1, victoryPoints: 4 },
  [Card.Red8]: { families: [CardFamily.Red], cost: 3, restBonus: 1, /*victoryPoints: 3 TODO: points per different adjacent family */ },
  [Card.Red9]: { families: [CardFamily.Red], cost: 7, restBonus: 1, victoryPoints: 5 },

  [Card.BlueStart1]: { families: [CardFamily.Blue], cost: 1, restBonus: 1, victoryPoints: 3 },
  [Card.BlueStart2]: { families: [CardFamily.Blue], cost: 2, restBonus: 1, victoryPoints: 4 },
  [Card.BlueStart3]: { families: [CardFamily.Blue], cost: 3, restBonus: 1, victoryPoints: 5 },
  [Card.Blue4]: { families: [CardFamily.Blue], cost: 7, restBonus: 1, victoryPoints: 8 },
  [Card.Blue5]: { families: [CardFamily.Blue], cost: 6, restBonus: 1, /*victoryPoints: 3 TODO: points per color */ },
  [Card.Blue6]: { families: [CardFamily.Blue], cost: 3, restBonus: 1, /*victoryPoints: 3 TODO: points per different adjacent family */ },
  [Card.Blue7]: { families: [CardFamily.Blue, CardFamily.Green], cost: 4, restBonus: 1, victoryPoints: 4 },
  [Card.Blue8]: { families: [CardFamily.Blue, CardFamily.Yellow], cost: 4, restBonus: 1, victoryPoints: 3 },
  [Card.Blue9]: { families: [CardFamily.Blue, CardFamily.Red], cost: 4, restBonus: 1, victoryPoints: 4 },

  [Card.GreenStart1]: { families: [CardFamily.Green], cost: 3, restBonus: 1, victoryPoints: 2 },
  [Card.GreenStart2]: { families: [CardFamily.Green], cost: 4, restBonus: 1, /*TODO: ette carte vaut autant de Points de Victoire que la carte située directement à sa droite.*/ },
  [Card.GreenStart3]: { families: [CardFamily.Green], cost: 4, restBonus: 1, /*TODO: ette carte vaut autant de Points de Victoire que la carte située directement à sa gauche.*/ },
  [Card.Green4]: { families: [CardFamily.Green], cost: 5, restBonus: 1, /*victoryPoints: 3 TODO: points per different adjacent family */ },
  [Card.Green5]: { families: [CardFamily.Green], cost: 6, restBonus: 1, /*victoryPoints: 3 TODO: points per color */ },
  [Card.Green6]: { families: [CardFamily.Green], cost: 5, restBonus: 1, /*victoryPoints: 3 TODO: points depending on step */ },
  [Card.Green7]: { families: [CardFamily.Green], cost: 6, restBonus: 1, victoryPoints: 5 },
  [Card.Green8]: { families: [CardFamily.Green], cost: 3, restBonus: 1, /*victoryPoints: 3 TODO: points per color around */ },
  [Card.Green9]: { families: [CardFamily.Green], cost: 5, restBonus: 1, /*victoryPoints: 3 TODO: points per color around */ },

  [Card.Archive1]: { families: [CardFamily.Blue, CardFamily.Yellow, CardFamily.Red, CardFamily.Green], cost: 5, restBonus: 1, victoryPoints: 2 },
  [Card.Archive2]: { families: [], cost: 6, restBonus: 1, /*TODO: victory points per card under*/},
  [Card.Archive3]: { families: [], cost: 3, restBonus: 1, victoryPoints: 4},
  [Card.Archive4]: { families: [], cost: 6, restBonus: 1, /*TODO: group of 4 diff colors*/},
  [Card.Archive5]: { families: [], cost: 5, restBonus: 1, victoryPoints: 4},
  [Card.Archive6]: { families: [], cost: 8, restBonus: 1, victoryPoints: 10},
  [Card.Archive7]: { families: [], cost: 6, restBonus: 3, victoryPoints: 2},
  [Card.Archive8]: { families: [], cost: 4, restBonus: 1, /*TODO: points per majority or each color */},
}

