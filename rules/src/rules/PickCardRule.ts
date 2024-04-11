import { MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'

export class PickCardRule  extends PlayerTurnRule {
  getPlayerMoves(): MaterialMove<number, number, number>[] {
    return []
  }
}