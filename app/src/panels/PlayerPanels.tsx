/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BorealRules } from '@gamepark/boreal/BorealRules'
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { PlayerColor } from '@gamepark/boreal/PlayerColor'
import { StyledPlayerPanel, usePlayerId, usePlayers, useRules } from '@gamepark/react-game'
import { FC } from 'react'
import { createPortal } from 'react-dom'
import Compass from '../images/tokens/compass.jpg'
import WhitePanelBG from '../images/panel/white_player.jpg'
import BlackPanelBG from '../images/panel/black_player.jpg'

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
        <StyledPlayerPanel
          key={player.id}
          player={player}
          backgroundImage={player.id === PlayerColor.Black? BlackPanelBG: WhitePanelBG}
          css={[panelPosition, player.id === (playerId ?? rules.players[0])? leftPosition: rightPosition ]}
          mainCounter={{
            image: Compass,
            value: rules.material(MaterialType.ExplorationToken).id(player.id).getItem()?.location.x ?? 0,
            imageCss: css`border-radius: 5em;`
          }}
        />
      )}
    </>,
    root
  )
}
const panelPosition = css`
  position: absolute;
  top: 9em;
`

const leftPosition = css`
left: 1em;
`

const rightPosition = css`
right: 1em;
`