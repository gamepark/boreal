import { MaterialGameSetup } from '@gamepark/rules-api'
import sampleSize from 'lodash/sampleSize'
import { BorealOptions } from './BorealOptions'
import { BorealRules } from './BorealRules'
import { archives, CardBack, standardLocations, startingLocations } from './material/Card'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerColor } from './PlayerColor'
import { RuleId } from './rules/RuleId'

/**
 * This class creates a new Game based on the game options
 */
export class BorealSetup extends MaterialGameSetup<PlayerColor, MaterialType, LocationType, BorealOptions> {
  Rules = BorealRules

  setupMaterial(_options: BorealOptions) {
    this.setupToken()
    this.setupStartingLocations()
    this.setupStandardLocations()
  }

  setupStartingLocations() {
    const items = sampleSize(startingLocations, 8).map((c) => ({
      id: {
        back: CardBack.Starting,
        front: c
      },
      location: {
        type: LocationType.BoardCard
      }
    }))

    this.material(MaterialType.Card).createItems(items)
  }

  setupStandardLocations() {
    const cards = [...sampleSize(archives, 3), ...standardLocations]
    const items = cards.map((c) => ({
      id: {
        back: CardBack.Standard,
        front: c
      },
      location: {
        type: LocationType.Deck
      }
    }))

    this.material(MaterialType.Card).createItems(items)
    this.material(MaterialType.Card).location(LocationType.Deck).shuffle()

  }

  setupToken() {
    this.material(MaterialType.ExplorationToken).createItem({
      id: PlayerColor.Black,
      location: {
        type: LocationType.BoardToken,
        id: PlayerColor.Black,
        x: 5
      }
    })

    this.material(MaterialType.ExplorationToken).createItem({
      id: PlayerColor.White,
      location: {
        type: LocationType.BoardToken,
        id: PlayerColor.White,
        x: 5
      }
    })
  }

  start() {
    this.startPlayerTurn(RuleId.Explore, PlayerColor.White)
  }
}