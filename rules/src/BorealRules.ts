import { FillGapStrategy, hideFront, PositiveSequenceStrategy, SecretMaterialRules } from '@gamepark/rules-api'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerColor } from './PlayerColor'
import { ExploreRule } from './rules/ExploreRule'
import { ReserveRule } from './rules/ReserveRule'
import { RestRule } from './rules/RestRule'
import { RuleId } from './rules/RuleId'


/**
 * This class implements the rules of the board game.
 * It must follow Game Park "Rules" API so that the Game Park server can enforce the rules.
 */
export class BorealRules extends SecretMaterialRules<PlayerColor, MaterialType, LocationType> {
  rules = {
    [RuleId.Explore]: ExploreRule,
    [RuleId.Rest]: RestRule,
    [RuleId.Reserve]: ReserveRule
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
      [LocationType.Reserve]: new PositiveSequenceStrategy()
    }
  }
}