/** @jsxImportSource @emotion/react */
import { BorealRules } from '@gamepark/boreal/BorealRules'
import { usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { useTranslation } from 'react-i18next'

export const InvertPyramidCardsHeader = () => {
  const { t } = useTranslation()
  const playerId = usePlayerId()
  const rules = useRules<BorealRules>()!
  const activePlayer = rules.getActivePlayer()
  const name = usePlayerName(activePlayer)
  if (activePlayer === playerId) {
    return <>{t('header.invert.pyramid.you')}</>
  }

  return <>{t('header.invert.pyramid.player', { player: name})}</>
}
