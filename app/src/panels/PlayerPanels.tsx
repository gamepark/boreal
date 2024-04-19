/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BorealRules } from '@gamepark/boreal/BorealRules'
import { PlayerColor } from '@gamepark/boreal/PlayerColor'
import { PyramidHelper } from '@gamepark/boreal/rules/helper/PyramidHelper'
import { ScoreHelper } from '@gamepark/boreal/rules/helper/ScoreHelper'
import { StyledPlayerPanel, usePlayerId, usePlayers, useRules } from '@gamepark/react-game'
import { FC } from 'react'
import { createPortal } from 'react-dom'
import BlackPanelBG from '../images/panel/black_player.jpg'
import WhitePanelBG from '../images/panel/white_player.jpg'
import Compass from '../images/tokens/compass.jpg'
import VictoryPoint from '../images/tokens/victory-point.png'

export const PlayerPanels: FC<any> = () => {
  const playerId = usePlayerId()
  const rules = useRules<BorealRules>()!
  const players = usePlayers({ sortFromMe: true })
  const root = document.getElementById('root')
  if (!root) {
    return null
  }

  const isEnded = rules?.game.rule?.id === undefined


  return createPortal(
    <>
      {players.map((player) => {
        const mainCounter = !isEnded? {
          image: Compass,
          value: '+' + new PyramidHelper(rules.game, player.id).restBonus ?? 0,
          imageCss: css`border-radius: 5em;`
        }: {
          image: VictoryPoint,
          value: new ScoreHelper(rules.game, player.id).totalScore,
          imageCss: css`border: 0; background-size: contain`
        }
          return <StyledPlayerPanel
            key={player.id}
            player={player}
            backgroundImage={player.id === PlayerColor.White ? BlackPanelBG : WhitePanelBG}
            css={[panelPosition, player.id === (playerId ?? rules.players[0]) ? leftPosition : rightPosition]}
            mainCounter={mainCounter}
          />
        }
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