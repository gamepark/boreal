/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BorealRules } from '@gamepark/boreal/BorealRules'
import { StyledPlayerPanel, usePlayerId, usePlayers, useRules } from '@gamepark/react-game'
import { FC } from 'react'
import { createPortal } from 'react-dom'

export const PlayerPanels: FC<any> = () => {
  const playerId = usePlayerId()
  const rules = useRules<BorealRules>()!
  const players = usePlayers({ sortFromMe: true })
  const root = document.getElementById('root')
  if (!root) {
    return null
  }

  return createPortal(
    <>
      {players.map((player) =>
        <StyledPlayerPanel key={player.id} player={player} css={[panelPosition, player.id === (playerId ?? rules.players[0])? leftPosition: rightPosition ]}/>
      )}
    </>,
    root
  )
}
const panelPosition = css`
  position: absolute;
  top: 8.5em;
`

const leftPosition = css`
left: 1em;
`

const rightPosition = css`
right: 1em;
`