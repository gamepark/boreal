import { CardFamily } from './Card'

export enum VictoryPointType {
  Brut = 1,
  PerFamily,
  AdjacentFamily,
  Adjacent,
  AdjacentDifferentFamily,
  FamilyMajority,
  PerFamilySet,
  LeftCard,
  RightCard,
  CardUnder,
  Step
}

export type Brut = {
  type: typeof VictoryPointType.Brut,
  points: number
}

export type PerFamily = {
  type: typeof VictoryPointType.PerFamily,
  family: CardFamily
  points: number
}

export type Adjacent = {
  type: typeof VictoryPointType.Adjacent,
  points: number
}

export type AdjacentFamily = {
  type: typeof VictoryPointType.AdjacentFamily,
  points: number,
  family: CardFamily
}


export type AdjacentDifferentFamily = {
  type: typeof VictoryPointType.AdjacentDifferentFamily,
  points: number
}

export type FamilyMajority = {
  type: typeof VictoryPointType.FamilyMajority,
  points: number
}

export type PerFamilySet = {
  type: typeof VictoryPointType.PerFamilySet,
  points: number
}

export type LeftCard = {
  type: typeof VictoryPointType.LeftCard
}

export type RightCard = {
  type: typeof VictoryPointType.RightCard
}

export type CardUnder = {
  type: typeof VictoryPointType.CardUnder
}

export type Step = {
  type: typeof VictoryPointType.Step,
  points: number
}

export type VictoryPointEffects = Brut |
  PerFamily |
  AdjacentFamily |
  AdjacentDifferentFamily |
  FamilyMajority |
  PerFamilySet |
  LeftCard |
  RightCard |
  CardUnder |
  Step |
  Adjacent