/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { CardBack, CardFamily, isArchive } from '@gamepark/boreal/material/Card'
import { CardDescription, Cards } from '@gamepark/boreal/material/CardDescription'
import { Effect, EffectType, isOpponentLooseCompass, isWinCompassEffect } from '@gamepark/boreal/material/CardEffect'
import { VictoryPointEffects, VictoryPointType } from '@gamepark/boreal/material/VictoryPointCondition'
import { MaterialHelpProps, shadowCss } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import BlueIcon from '../../images/icons/blue.jpg'
import GreenIcon from '../../images/icons/green.jpg'
import RedIcon from '../../images/icons/red.jpg'
import YellowIcon from '../../images/icons/yellow.jpg'
import Compass from '../../images/tokens/compass.jpg'
import { BorealCardButton } from './buttons/BorealCardButton'

export const BorealCardHelp: FC<MaterialHelpProps> = (props) => {
  const { item } = props
  const { t } = useTranslation()

  return (
    <>
      <h2>{t(getCardTitle(item))}</h2>
      <BorealCardButton {...props} />
      <VisibleBorealCardHelp {...props} />
    </>
  )
}

const VisibleBorealCardHelp: FC<MaterialHelpProps> = (props) => {
  const { item } = props
  const { t } = useTranslation()
  if (item.id.front === undefined) return null
  const description: CardDescription = Cards[item.id.front]

  return (
    <>
      {isArchive(item.id.front) && (
        <p>
          <Trans defaults="help.card.archive.limit">
            <strong/>
          </Trans>
        </p>
      )}
      {!!description.families?.length && (
        <p css={familyIconsCss}>
          <span>{t(description.families?.length === 1 ? 'help.card.family' : 'help.card.families')}</span>
          {description.families.map((f: CardFamily) => (
            <span key={f} css={iconCss(familyIcons[f])}/>
          ))}
        </p>
      )}
      <p css={textWithIconCss}>
        <Trans defaults="help.card.cost" values={{ cost: description.cost ?? 0 }}>
          <span css={iconCss(Compass)}/>
        </Trans>
      </p>
      {description.baselineForbidden && (
        <p>{t('help.card.constraint')}</p>
      )}
      {description.restBonus !== undefined && (
        <p css={textWithIconCss}>
          <Trans defaults="help.card.income" values={{ compass: description.restBonus ?? 0 }}>
            <span css={iconCss(Compass)}/>
          </Trans>
        </p>
      )}
      {!!description.victoryPointEffect && (
        <p css={textWithIconCss}>
          {getVictoryPointText(description.victoryPointEffect)}
        </p>
      )}
      {!!description.placementEffects?.length && (
        <>
          <p css={titleCss}>{t('help.card.effect', { count: description.placementEffects.length ?? 0 })}</p>
          {description.placementEffects.map((e, i) => (
            <p key={i} css={[textWithIconCss]}>
              {getEffectText(e)}
            </p>
          ))}
        </>
      )}


    </>
  )
}

const getVictoryPointText = (effect: VictoryPointEffects) => {
  switch (effect.type) {
    case VictoryPointType.Brut:
      return (
        <Trans defaults="help.card.points.raw" values={{ points: effect.points }}>
          <strong/>
        </Trans>
      )
    case VictoryPointType.PerFamily:
      return (
        <Trans defaults="help.card.points.family">
          <strong/>
          <span css={iconCss(familyIcons[effect.family])}/>
        </Trans>
      )
    case VictoryPointType.AdjacentFamily:
      return (
        <Trans defaults="help.card.points.family.adjacent">
          <strong/>
          <span css={iconCss(familyIcons[effect.family])}/>
        </Trans>
      )
    case VictoryPointType.Adjacent:
      return (
        <Trans defaults="help.card.points.adjacent">
          <strong/>
        </Trans>
      )
    case VictoryPointType.AdjacentDifferentFamily:
      return (
        <Trans defaults="help.card.points.families.adjacent">
          <strong/>
        </Trans>
      )
    case VictoryPointType.FamilyMajority:
      return (
        <Trans defaults="help.card.points.families.majority">
          <strong/>
        </Trans>
      )
    case VictoryPointType.PerFamilySet:
      return (
        <Trans defaults="help.card.points.families.collection">
          <strong/>
        </Trans>
      )
    case VictoryPointType.LeftCard:
      return (
        <Trans defaults="help.card.points.left">
          <strong/>
        </Trans>
      )
    case VictoryPointType.RightCard:
      return (
        <Trans defaults="help.card.points.right">
          <strong/>
        </Trans>
      )
    case VictoryPointType.CardUnder:
      return (
        <Trans defaults="help.card.points.under">
          <strong/>
        </Trans>
      )
    case VictoryPointType.Step:
      return (
        <Trans defaults="help.card.points.floor">
          <strong/>
        </Trans>
      )
  }
}

const getEffectText = (effect: Effect) => {
  if (isOpponentLooseCompass(effect)) {
    return <Trans defaults="help.card.effect.compass.lose" values={{ number: effect.count }}>
      <span css={redCss}/>
      <span css={iconCss(Compass)}/>
    </Trans>
  }
  if (isWinCompassEffect(effect)) {
    return <Trans defaults="help.card.effect.compass.gain" values={{ number: effect.count }}>
      <strong/>
      <span css={iconCss(Compass)}/>
    </Trans>
  }

  switch (effect.type) {
    case EffectType.Pick:
      return <Trans defaults="help.card.effect.draw-pick">
        <strong/>
      </Trans>
    case EffectType.Remove:
      return <Trans defaults="help.card.effect.remove">
        <strong/>
      </Trans>
    case EffectType.InvertBoardCards:
      return <Trans defaults="help.card.effect.invert.board">
        <strong/>
      </Trans>
    case EffectType.InvertPyramidCards:
      return <Trans defaults="help.card.effect.invert.pyramid">
        <strong/>
      </Trans>
    case EffectType.WinCompass:
      return <Trans defaults="help.card.effect.compass.gain">
        <strong/>
      </Trans>
    case EffectType.Reserve:
      return <Trans defaults="help.card.effect.pick">
        <strong/>
      </Trans>

  }

  return null
}

const getCardTitle = (item: Partial<MaterialItem>) => {
  const front = item.id.front
  if (front && isArchive(front)) {
    return 'help.card.archive'
  }

  if (item.id.back === CardBack.Standard) {
    return 'help.card.place'
  }

  return 'help.card.start'
}

const familyIcons = {
  [CardFamily.Red]: RedIcon,
  [CardFamily.Green]: GreenIcon,
  [CardFamily.Yellow]: YellowIcon,
  [CardFamily.Blue]: BlueIcon
}

const titleCss = css`
  text-decoration: underline;
  margin-bottom: 0;
  margin-top: 2em;
  font-style: italic;
`

const redCss = css`
  color: red;
  font-weight: bold;
`

const textWithIconCss = css`
  > span {
    margin-left: 0;
    margin-bottom: -0.35em;
  }
`

const familyIconsCss = css`
  display: flex;
  flex-direction: row;
  align-items: center;
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

