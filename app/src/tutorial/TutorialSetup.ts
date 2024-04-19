import { BorealSetup } from '@gamepark/boreal/BorealSetup'
import { Card, CardBack, isArchive, startingLocations } from '@gamepark/boreal/material/Card'
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
    const deck= this.material(MaterialType.Card).location(LocationType.Deck).deck()
    const length = deck.length
    deck.id(({front}: any) => front === Card.Green6).moveItem({
      type: LocationType.Deck,
      x: length - 2
    })
    deck.id(({front}: any) => front === Card.Yellow6).moveItem({
      type: LocationType.Deck,
      x: length - 2
    })
    deck.id(({front}: any) => isArchive(front)).moveItem({
      type: LocationType.Deck,
      x: length - 5
    })
  }
}
