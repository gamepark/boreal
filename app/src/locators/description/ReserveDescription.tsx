/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationType } from '@gamepark/boreal/material/LocationType'
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { DropAreaDescription, isLocationSubset, MaterialContext } from '@gamepark/react-game'
import { isMoveItemType, Location, MaterialMove } from '@gamepark/rules-api'
import { Trans } from 'react-i18next'
import { borealCardDescription } from '../../material/BorealCardDescription'

export class ReserveDescription extends DropAreaDescription {
  height = borealCardDescription.height * 4.65
  width = borealCardDescription.width
  borderRadius = borealCardDescription.borderRadius

  content = () => {
    return (
      <div css={reserveTextCss}>
        <Trans defaults="help.reserve.text"/>
      </div>
    )
  }

  canShortClick(move: MaterialMove, location: Location, context: MaterialContext) {
    const { rules } = context
    if (!isMoveItemType(MaterialType.Card)(move)) return false
    if (move.location.type === LocationType.Reserve) {
      const selected = !!rules.material(MaterialType.Card).getItem(move.itemIndex)!.selected
      return selected && isLocationSubset(move.location, location)
    }
    return false
  }
}

const reserveTextCss = css`
  position: absolute;
  height: 100%;
  width: 100%;
  writing-mode: vertical-rl;
  text-orientation: upright;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 2em;
  font-weight: bold
`