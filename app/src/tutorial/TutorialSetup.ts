import { BorealSetup } from '@gamepark/boreal/BorealSetup'
import { Card, CardBack, CardId, isArchive, startingLocations } from '@gamepark/boreal/material/Card'
import { LocationType } from '@gamepark/boreal/material/LocationType'
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import sampleSize from 'lodash/sampleSize'

export class TutorialSetup extends BorealSetup {

  setupStartingLocations() {
    const mandatoryLocations = [Card.BlueStart2, Card.GreenStart2, Card.GreenStart3, Card.YellowStart1, Card.RedStart1]
    const remainingLocations = startingLocations.filter((l) => !mandatoryLocations.includes(l))
    const randomLocations = sampleSize(remainingLocations, 4)

    const positions = [
      randomLocations[0], Card.BlueStart2, randomLocations[1], Card.GreenStart3, Card.RedStart1, randomLocations[2], Card.GreenStart2, Card.YellowStart1
    ]

    const items = positions.map((c) => ({
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
    super.setupStandardLocations()
    const deck = this.material(MaterialType.Card).location(LocationType.Deck).deck()

    const yellow6 = deck.id<CardId>(id => id.front === Card.Yellow6)
    const green6 = deck.id<CardId>(id => id.front === Card.Green6)
    const archive = deck.id<CardId>(id => isArchive(id.front!))

    yellow6.moveItem({ type: LocationType.Deck, x: 0 })
    green6.moveItem({ type: LocationType.Deck, x: 0 })
    archive.moveItem({ type: LocationType.Deck, x: 0 })

    yellow6.moveItem({ type: LocationType.Deck, x: deck.length - 2 })
    green6.moveItem({ type: LocationType.Deck, x: deck.length - 3 })
    archive.moveItem({ type: LocationType.Deck, x: deck.length - 5 })
  }
}
