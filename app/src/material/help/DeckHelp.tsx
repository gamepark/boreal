import { BorealRules } from '@gamepark/boreal/BorealRules'
import { LocationType } from '@gamepark/boreal/material/LocationType'
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { LocationHelpProps, useRules } from '@gamepark/react-game'
import { FC } from 'react'
import { Trans } from 'react-i18next'

export const DeckHelp: FC<LocationHelpProps> = () => {
  const rules = useRules<BorealRules>()!
  const deckLength = rules.material(MaterialType.Card).location(LocationType.Deck).length
  return (
    <Trans i18nKey="help.draw.size" values={{ number: deckLength }} />
  )
}