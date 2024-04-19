import { ItemMove, PlayerTurnRule } from '@gamepark/rules-api'
import { DiscoverRule } from './DiscoverRule'
import { ReserveRule } from './ReserveRule'

export class ExploreRule extends PlayerTurnRule {

  getPlayerMoves() {
    return [
      ...new DiscoverRule(this.game).getPlayerMoves(),
      ...new ReserveRule(this.game).getPlayerMoves()
    ]
  }

  afterItemMove(move: ItemMove) {
    return [
      ...new DiscoverRule(this.game).afterItemMove(move),
      ...new ReserveRule(this.game).afterItemMove(move)
    ]
  }

  beforeItemMove(move: ItemMove) {
    return [
      ...new DiscoverRule(this.game).beforeItemMove(move),
      ...new ReserveRule(this.game).beforeItemMove(move)
    ]
  }
}