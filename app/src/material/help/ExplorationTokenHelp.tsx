/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHelpProps } from '@gamepark/react-game/dist/components/material/MaterialDescription'
import { shadowCss } from '@gamepark/react-game/dist/css/componentSizeCss'
import { usePlayerName } from '@gamepark/react-game/dist/hooks/usePlayerName'
import { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import Compass from '../../images/tokens/compass.jpg'

export const ExplorationTokenHelp: FC<MaterialHelpProps> = (props) => {
  const { t } = useTranslation()
  const name = usePlayerName(props.item.id)
  return (
    <>
      <h2>{t('help.token', { player: name })}</h2>
      <p css={textWithIconCss}>
        <Trans defaults="help.token.rules" values={{ player: name }}>
          <span css={iconCss(Compass)}/>
        </Trans>
      </p>
    </>
  )
}

const textWithIconCss = css`
  > span {
    margin-left: 0;
    margin-bottom: -0.35em;
  }
`

const iconCss = (icon: string) => css`
  display: inline-block;
  background: url(${icon}) no-repeat;
  background-size: cover;
  border-radius: 5em;
  height: 1.4em;
  width: 1.4em;
  margin-left: 0.3em;
  ${shadowCss(icon)}
`