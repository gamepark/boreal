/** @jsxImportSource @emotion/react */
import { BorealRules } from '@gamepark/boreal/BorealRules'
import { usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { useTranslation } from 'react-i18next'

export const ReserveHeader = () => {
  const { t } = useTranslation()
  const playerId = usePlayerId()
  const rules = useRules<BorealRules>()!
  const activePlayer = rules.getActivePlayer()
  const name = usePlayerName(activePlayer)
  if (activePlayer === playerId) {
    return <>{t('header.reserve.you')}</>
  }

  return <>{t('header.reserve.player', { player: name})}</>
}
