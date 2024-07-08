/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BorealRules } from '@gamepark/boreal/BorealRules'
import { LocationType } from '@gamepark/boreal/material/LocationType'
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { MaterialHelpProps, PlayMoveButton, useLegalMove, useRules } from '@gamepark/react-game'
import { isMoveItemType } from '@gamepark/rules-api'
import equal from 'fast-deep-equal'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const BorealCardButton: FC<MaterialHelpProps> = (props) => {
  return (
    <>
      <SelectCardButton { ...props } />
      <ReserveCardButton { ...props } />
      <DestroyCardButton { ...props } />
      <InverseCardButton { ...props } />
    </>
  )
}

const SelectCardButton: FC<MaterialHelpProps> = (props) => {
  const { closeDialog, item, itemIndex } = props
  const rules = useRules<BorealRules>()!
  const { t } = useTranslation()
  const move = useLegalMove((move) => isMoveItemType(MaterialType.Card)(move) && (move.location?.type === LocationType.Pyramid || move.location?.type === LocationType.BoardCard) && move.itemIndex === itemIndex)

  if (!move || item.selected) return null

  return (
    <PlayMoveButton move={rules.material(MaterialType.Card).index(move.itemIndex).selectItem()} local onPlay={closeDialog} css={marginCss}>
      {t('move.card.select')}
    </PlayMoveButton>
  )
}

const ReserveCardButton: FC<MaterialHelpProps> = (props) => {
  const { closeDialog, itemIndex } = props
  const { t } = useTranslation()
  const move = useLegalMove((move) => isMoveItemType(MaterialType.Card)(move) && move.location?.type === LocationType.Reserve && move.itemIndex === itemIndex)

  if (!move) return null

  return (
    <PlayMoveButton move={move} onPlay={closeDialog} css={marginCss}>
      {t('move.card.reserve')}
    </PlayMoveButton>
  )
}

const InverseCardButton: FC<MaterialHelpProps> = (props) => {
  const { closeDialog, item } = props
  const { t } = useTranslation()
  const rules = useRules<BorealRules>()!
  const selectedItem = rules.material(MaterialType.Card).selected()
  const move = useLegalMove((move) => isMoveItemType(MaterialType.Card)(move) && (move.location?.type === LocationType.Pyramid || move.location?.type === LocationType.BoardCard) && equal(item.location, move.location) && move.itemIndex === selectedItem.getIndex())

  if (!move || item.selected) return null

  return (
    <PlayMoveButton move={move} onPlay={closeDialog} css={marginCss}>
      {t('move.card.invert')}
    </PlayMoveButton>
  )
}

const DestroyCardButton: FC<MaterialHelpProps> = (props) => {
  const { closeDialog, itemIndex } = props
  const { t } = useTranslation()
  const move = useLegalMove((move) => isMoveItemType(MaterialType.Card)(move) && move.location?.type === LocationType.Destroyed && move.itemIndex === itemIndex)

  if (!move) return null

  return (
    <PlayMoveButton move={move} onPlay={closeDialog} css={marginCss}>
      {t('move.card.destroy')}
    </PlayMoveButton>
  )
}

const marginCss = css`
  margin-top: 0.5em;
`