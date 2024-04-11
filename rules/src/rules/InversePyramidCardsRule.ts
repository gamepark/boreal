import { MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'

export class InversePyramidCardsRule extends PlayerTurnRule {
  getPlayerMoves(): MaterialMove<number, number, number>[] {
    return []
  }
}