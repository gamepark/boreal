
export enum EffectType {
  Reserve = 1,
  Remove,
  InverseBoardCards,
  InversePyramidCards,
  WinCompass,
  OpponentLooseCompass,
  Pick
}

export type BaseEffect = {
  type: EffectType
}

export type WinCompassEffect = {
  type: typeof EffectType.WinCompass,
  count: number
}

export type OpponentLooseCompassEffect = {
  type: typeof EffectType.OpponentLooseCompass,
  count: number
}

export type Effect = BaseEffect | WinCompassEffect | OpponentLooseCompassEffect

export const isWinCompassEffect = (effect: Effect): effect is WinCompassEffect => {
  return effect.type === EffectType.WinCompass
}

export const isOpponentLooseCompass = (effect: Effect): effect is OpponentLooseCompassEffect => {
  return effect.type === EffectType.OpponentLooseCompass
}