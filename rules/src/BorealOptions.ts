import { OptionsSpec } from '@gamepark/rules-api'
import { TFunction } from 'i18next'
import { PlayerColor, playerColors } from './PlayerColor'

type PlayerOptions = { id: PlayerColor }
/**
 * This is the type of object that the game receives when a new game is started.
 * The first generic parameter, "{}", can be changed to include game options like variants or expansions.
 */
export type BorealOptions = {
  players: PlayerOptions[]
}

/**
 * This object describes all the options a game can have, and will be used by GamePark website to create automatically forms for you game
 * (forms for friendly games, or forms for matchmaking preferences, for instance).
 */
export const BorealOptionsSpec: OptionsSpec<BorealOptions> = {
  players: {
    id: {
      label: (t: TFunction) => t('Player color'),
      values: playerColors,
      valueSpec: (color: PlayerColor) => ({ label: (t: TFunction) => getPlayerName(color, t) })
    }
  }
}

export function getPlayerName(playerId: PlayerColor, t: TFunction) {
  switch (playerId) {
    case PlayerColor.White:
      return t('White')
    case PlayerColor.Black:
      return t('Black')
  }
}