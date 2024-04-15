/** @jsxImportSource @emotion/react */
import { BorealRules } from '@gamepark/boreal/BorealRules'
import { usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { useTranslation } from 'react-i18next'

export const RemoveHeader = () => {
  const { t } = useTranslation()
  const playerId = usePlayerId()
  const rules = useRules<BorealRules>()!
  const activePlayer = rules.getActivePlayer()
  const name = usePlayerName(activePlayer)
  if (activePlayer === playerId) {
    return <>{t('header.remove.you')}</>
  }

  return <>{t('header.remove.player', { player: name})}</>
}
