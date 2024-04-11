import { isMoveItemType, isStartRule, ItemMove, Material, MaterialItem, MaterialMove, MoveItem, PlayerTurnRule } from '@gamepark/rules-api'
import { Cards } from '../material/CardDescription'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { PlayerColor } from '../PlayerColor'
import { BoardHelper } from './helper/BoardHelper'
import { EffectHelper } from './helper/EffectHelper'
import { PyramidHelper } from './helper/PyramidHelper'
import { RuleId } from './RuleId'

export class DiscoverRule extends PlayerTurnRule {

  getPlayerMoves() {
    const moves: MaterialMove[] = []
    moves.push(...this.getPlaceMoves(this.boardCards))
    moves.push(...this.getPlaceMoves(this.reserveCards))
    return moves
  }

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.Card)(move) || move.location.type !== LocationType.Pyramid) return []
    const moves: MaterialMove[] = []
    moves.push(...this.getPaymentMoves(move))
    moves.push(...new BoardHelper(this.game).refillBoardMoves)

    const item = this.material(MaterialType.Card).index(move.itemIndex)
    moves.push(...new EffectHelper(this.game, item).moves)
    if (moves.some(isStartRule)) {
      return moves
    }

    moves.push(this.rules().startRule(RuleId.Rest))
    return moves
  }

  getPaymentMoves(move: MoveItem) {
    const item = this.material(MaterialType.Card).getItem(move.itemIndex)!
    const cost = Cards[item.id.front].cost ?? 0
    if (!cost) return []
    return this
      .material(MaterialType.ExplorationToken)
      .id(this.player)
      .moveItems((i) => ({
        ...i.location,
        x: i.location.x! - cost
      }))
  }

  getPlaceMoves(cards: Material) {
    const moves: MaterialMove[] = []
    for (const cardIndex of cards.getIndexes()) {
      const item = cards.getItem(cardIndex)!
      const cost = Cards[item.id.front].cost ?? 0
      if (!this.canBeBought(cost, item)) continue

      const card = cards.index(cardIndex)
      for (const space of this.availableSpaces) {
        moves.push(card.moveItem({ type: LocationType.Pyramid, player: this.player, ...space }))
      }
    }
    return moves
  }

  canBeBought(cost: number, boardCard: MaterialItem) {
    const compass = this.compass
    if (this.player === PlayerColor.Black && boardCard.location.x! > (compass - 1)) return false
    if (this.player === PlayerColor.White && (boardCard.location.x!) < (8 - compass)) return false
    return compass >= cost
  }

  get compass() {
    return this.explorationToken.getItem()!.location.x!
  }

  get explorationToken() {
    return this
      .material(MaterialType.ExplorationToken)
      .id(this.player)
  }

  get boardCards() {
    return this
      .material(MaterialType.Card)
      .location(LocationType.BoardCard)
  }

  get reserveCards() {
    return this
      .material(MaterialType.Card)
      .location(LocationType.Reserve)
      .player(this.player)
  }

  get availableSpaces() {
    return new PyramidHelper(this.game, this.player).availableSpaces
  }
}