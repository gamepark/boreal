import { isMoveItemType, ItemMove, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { isArchive } from '../material/Card'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { RuleId } from './RuleId'

export class PickCardRule extends PlayerTurnRule {

  onRuleStart() {
    const deck = this.deck
    if (deck.length < 3) return [this.rules().startRule(RuleId.Rest)]
    return this.deck.deal({ type: LocationType.Hand, player: this.player }, 3)
  }

  getPlayerMoves(): MaterialMove<number, number, number>[] {
    return this
      .hand
      .id(({ front }: any) => !this.hasArchive || !isArchive(front))
      .moveItems({
        type: LocationType.Reserve,
        player: this.player
      })
  }

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.Card)(move) || move.location?.type !== LocationType.Reserve) return []
    delete this.material(MaterialType.Card).getItem(move.itemIndex)?.selected
    return [
      ...this.hand.moveItems({ type: LocationType.Deck, x: 0 }),
      this.rules().startRule(RuleId.Rest)
    ]
  }

  get hand() {
    return this.material(MaterialType.Card)
      .location(LocationType.Hand)
  }

  get deck() {
    return this.material(MaterialType.Card)
      .location(LocationType.Deck)
      .deck()
  }

  get hasArchive() {
    return this
      .material(MaterialType.Card)
      .player(this.player)
      .location((l) => l.type !== LocationType.Hand)
      .id(({ front }: any) => front && isArchive(front))
      .length === 1
  }
}