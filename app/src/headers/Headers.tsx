/** @jsxImportSource @emotion/react */
import { RuleId } from '@gamepark/boreal/rules/RuleId'
import { ComponentType } from 'react'
import { ExploreHeader } from './ExploreHeader'
import { InvertBoardCardsHeader } from './InvertBoardCardsHeader'
import { InvertPyramidCardsHeader } from './InvertPyramidCardsHeader'
import { PickHeader } from './PickHeader'
import { RemoveHeader } from './RemoveHeader'
import { ReserveHeader } from './ReserveHeader'
import { RestHeader } from './RestHeader'

export const Headers: Partial<Record<RuleId, ComponentType>> = {
  [RuleId.Explore]: ExploreHeader,
  [RuleId.Rest]: RestHeader,
  [RuleId.Reserve]: ReserveHeader,
  [RuleId.Remove]: RemoveHeader,
  [RuleId.InvertBoardCards]: InvertBoardCardsHeader,
  [RuleId.InvertPyramidCards]: InvertPyramidCardsHeader,
  [RuleId.Pick]: PickHeader,
}