import { isMoveItemType, isSelectItemType, isStartRule, ItemMove, Material, MaterialItem, MaterialMove, MoveItem, PlayerTurnRule } from '@gamepark/rules-api'
import { isArchive } from '../material/Card'
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

  beforeItemMove(move: ItemMove) {
    if (isSelectItemType(MaterialType.Card)(move)) {
      const selected = this.material(MaterialType.Card).selected()
      if (selected.length) {
        delete selected.getItem()!.selected
      }
    }

    return []
  }

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.Card)(move) || move.location.type !== LocationType.Pyramid) return []
    delete this.material(MaterialType.Card).getItem(move.itemIndex).selected
    const moves: MaterialMove[] = []
    moves.push(...this.getPaymentMoves(move))
    moves.push(...new BoardHelper(this.game).refillBoardMoves)

    const item = this.material(MaterialType.Card).index(move.itemIndex)
    moves.push(...new EffectHelper(this.game, item).effectMoves)
    if (moves.some(isStartRule)) {
      return moves
    }

    moves.push(this.startRule(RuleId.Rest))
    return moves
  }

  getPaymentMoves(move: MoveItem) {
    const item = this.material(MaterialType.Card).getItem(move.itemIndex)
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
      const item = cards.getItem(cardIndex)
      const description = Cards[item.id.front]
      const cost = description.cost ?? 0
      if (!this.canBeBought(cost, item)) continue

      const card = cards.index(cardIndex)
      for (const space of this.availableSpaces) {
        if (space.y === 0 && description.baselineForbidden) continue
        moves.push(card.moveItem({ type: LocationType.Pyramid, player: this.player, ...space }))
      }
    }
    return moves
  }

  canBeBought(cost: number, item: MaterialItem) {
    const compass = this.compass
    if (item.location.type === LocationType.BoardCard) {
      if (this.player === PlayerColor.White && item.location.x! > (compass - 1)) return false
      if (this.player === PlayerColor.Black && (item.location.x!) < (8 - compass)) return false
    }
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
    const hasArchive = this.hasArchive
    return this
      .material(MaterialType.Card)
      .location(LocationType.BoardCard)
      .filter((item) => !hasArchive || !isArchive(item.id.front))
  }

  get reserveCards() {
    return this
      .material(MaterialType.Card)
      .location(LocationType.Reserve)
      .player(this.player)
  }

  get hasArchive() {
    return this
      .material(MaterialType.Card)
      .player(this.player)
      .id(({ front }: any) => front && isArchive(front))
      .length === 1
  }

  get availableSpaces() {
    return new PyramidHelper(this.game, this.player).availableSpaces
  }
}