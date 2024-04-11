import { MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'

export class RemoveBoardCardRule extends PlayerTurnRule {
  getPlayerMoves(): MaterialMove<number, number, number>[] {
    return []
  }
}