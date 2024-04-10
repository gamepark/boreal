/** @jsxImportSource @emotion/react */
import { GameTable } from '@gamepark/react-game'
import { FC } from 'react'
import { PlayerPanels } from './panels/PlayerPanels'

type GameDisplayProps = {
  players: number
}

export const GameDisplay: FC<GameDisplayProps> = () => {
  return <>
    <GameTable
      xMin={-50}
      xMax={50}
      yMin={-30}
      yMax={22}
      margin={{ top: 7, left: 0, right: 0, bottom: 0 }}
      //css={css`background-color: rgba(255, 255, 255, 0.5)`}
    >
      <PlayerPanels/>
    </GameTable>
  </>
}
