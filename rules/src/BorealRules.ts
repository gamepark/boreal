import {
  CompetitiveScore,
  FillGapStrategy,
  hideFront,
  MaterialGame,
  MaterialMove,
  PositiveSequenceStrategy,
  SecretMaterialRules,
  TimeLimit
} from '@gamepark/rules-api'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerColor } from './PlayerColor'
import { ExploreRule } from './rules/ExploreRule'
import { ScoreHelper } from './rules/helper/ScoreHelper'
import { InvertBoardCardsRule } from './rules/InvertBoardCardsRule'
import { InvertPyramidCardsRule } from './rules/InvertPyramidCardsRule'
import { PickCardRule } from './rules/PickCardRule'
import { RemoveBoardCardRule } from './rules/RemoveBoardCardRule'
import { ReserveRule } from './rules/ReserveRule'
import { RestRule } from './rules/RestRule'
import { RuleId } from './rules/RuleId'


/**
 * This class implements the rules of the board game.
 * It must follow Game Park "Rules" API so that the Game Park server can enforce the rules.
 */
export class BorealRules extends SecretMaterialRules<PlayerColor, MaterialType, LocationType>
  implements CompetitiveScore<MaterialGame<PlayerColor, MaterialType, LocationType>, MaterialMove<PlayerColor, MaterialType, LocationType>, PlayerColor>,
    TimeLimit<MaterialGame<PlayerColor, MaterialType, LocationType>, MaterialMove<PlayerColor, MaterialType, LocationType>, PlayerColor>
  {
  rules = {
    [RuleId.Explore]: ExploreRule,
    [RuleId.Rest]: RestRule,
    [RuleId.Reserve]: ReserveRule,
    [RuleId.InvertPyramidCards]: InvertPyramidCardsRule,
    [RuleId.InvertBoardCards]: InvertBoardCardsRule,
    [RuleId.Remove]: RemoveBoardCardRule,
    [RuleId.Pick]: PickCardRule
  }

  hidingStrategies = {
    [MaterialType.Card]: {
      [LocationType.Deck]: hideFront
    }
  }

  locationsStrategies = {
    [MaterialType.Card]: {
      [LocationType.Deck]: new PositiveSequenceStrategy(),
      [LocationType.BoardCard]: new FillGapStrategy(),
      [LocationType.Reserve]: new PositiveSequenceStrategy(),
      [LocationType.Destroyed]: new PositiveSequenceStrategy(),
      [LocationType.Hand]: new PositiveSequenceStrategy()
    }
  }

    getScore(playerId: PlayerColor): number {
      return new ScoreHelper(this.game, playerId).totalScore
    }

    giveTime(): number {
      return 60
    }
}