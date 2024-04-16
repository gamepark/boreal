import { Material, MaterialGame, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { Cards } from '../../material/CardDescription'
import { Effect, EffectType, isOpponentLooseCompass, isWinCompassEffect } from '../../material/CardEffect'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { PlayerColor } from '../../PlayerColor'
import { RuleId } from '../RuleId'

export class EffectHelper extends PlayerTurnRule {

  constructor(game: MaterialGame, readonly card: Material) {
    super(game)
  }

  get placementEffects(): Effect[] {
    const item = this.card.getItem()!
    const id = item.id.front
    if (!id) return []
    return Cards[id].placementEffects ?? []
  }

  get effectMoves(): MaterialMove[] {
    const moves: MaterialMove[] = []
    for (const effect of this.placementEffects) {
      moves.push(...this.getOpponentLoseCompassMoves(effect))
      moves.push(...this.getWinCompassMoves(effect))
      moves.push(...this.getRuleMoves(effect))
    }
    return moves
  }

  getRuleMoves(effect: Effect) {
    switch (effect.type) {
      case EffectType.InvertBoardCards:
        return [this.rules().startRule(RuleId.InvertBoardCards)]
      case EffectType.InvertPyramidCards:
        return [this.rules().startRule(RuleId.InvertPyramidCards)]
      case EffectType.Reserve:
        return [this.rules().startRule(RuleId.Reserve)]
      case EffectType.Remove:
        return [this.rules().startRule(RuleId.Remove)]
      case EffectType.Pick:
        return [this.rules().startRule(RuleId.Pick)]
    }

    return []
  }

  getWinCompassMoves(effect: Effect) {
    if (!isWinCompassEffect(effect)) return []
    const item = this.card.getItem()!
    const cardCost = Cards[item.id.front].cost ?? 0
    const playerCompass = this.getPlayerCompass(this.player) - cardCost
    const addedCompass = Math.min(8 - playerCompass, effect.count)
    if (!addedCompass) return []
    return this.material(MaterialType.ExplorationToken)
      .id(this.player)
      .moveItems({
        type: LocationType.BoardToken,
        id: this.player,
        x: playerCompass + addedCompass
      })
  }

  getPlayerCompass(playerId: PlayerColor) {
    return this.material(MaterialType.ExplorationToken)
      .id(playerId)
      .getItem()!
      .location.x!
  }

  getOpponentLoseCompassMoves(effect: Effect) {
    if (!isOpponentLooseCompass(effect)) return []
    const opponent = this.game.players.find((p) => p !== this.player)!
    const playerCompass = this.getPlayerCompass(opponent)
    const removedCompass = Math.min(effect.count, playerCompass)
    if (!removedCompass) return []
    return this.material(MaterialType.ExplorationToken)
      .id(opponent)
      .moveItems({
        type: LocationType.BoardToken,
        id: opponent,
        x: playerCompass - removedCompass
      })

  }
}