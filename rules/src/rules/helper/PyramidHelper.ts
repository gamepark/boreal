import { MaterialGame, MaterialRulesPart, XYCoordinates } from '@gamepark/rules-api'
import sum from 'lodash/sum'
import { Cards } from '../../material/CardDescription'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { PlayerColor } from '../../PlayerColor'

export class PyramidHelper extends MaterialRulesPart {
  constructor(game: MaterialGame, readonly player: PlayerColor) {
    super(game)
  }

  get availableSpaces() {
    const spaces: XYCoordinates[] = []
    const firstLine = this.baseline
    for (let y = 0; y < 4; y++) {
      if (y > 0 && !firstLine.length) continue
      if (y === 0) {
        spaces.push(...this.baseLineAvailableSpaces)
      } else {
        spaces.push(...this.getTopLineAvailableSpace(y))
      }
    }

    return spaces.filter((s) =>
      !this.material(MaterialType.Card)
        .location(LocationType.Pyramid)
        .player(this.player)
        .location((l) => l.x === s.x && l.y === s.y)
        .length
    )
  }

  get restBonus() {
    const nonCoveredCards = this.nonCoveredPyramidCards
    return sum(nonCoveredCards.getItems().map((item) => Cards[item.id.front]?.restBonus ?? 0))
  }

  get nonCoveredPyramidCards() {
    const pyramid = this.pyramid
    return pyramid.filter((item) => {
        const topLocation = item.location.y! + 1
        return !pyramid.filter((i) =>
          i.location.y === topLocation
          && Math.abs(i.location.x! - item.location.x!) === 1
        ).length
      }
    )
  }

  getTopLineAvailableSpace(y: number) {
    const maxCard = 4 - y
    const line = this.material(MaterialType.Card).location((l) => l.type === LocationType.Pyramid && l.player === this.player && l.y === y)
    if (line.length === maxCard) return []
    const underLine = this.material(MaterialType.Card).location((l) => l.type === LocationType.Pyramid && l.player === this.player && l.y === (y - 1))
    const minUnderlineX = underLine.minBy((item) => item.location.x!).getItem()?.location.x ?? 0
    const spaces: XYCoordinates[] = []
    const minX = minUnderlineX + 1
    for (let index = 0; index < maxCard; index++) {
      const x = minX + (index * 2)
      if (underLine.filter((item) => Math.abs(item.location.x! - x) + Math.abs(item.location.x! - x) === 2).length < 2) continue
      spaces.push({ x, y })
    }

    return spaces
  }

  get baseLineAvailableSpaces() {
    const baseline = this.baseline
    if (baseline.length === 0) return [{ x: 0, y: 0 }]
    if (baseline.length === 4) return []
    const minX = baseline.minBy((item) => item.location.x!).getItem()?.location.x ?? 0
    const maxX = baseline.maxBy((item) => item.location.x!).getItem()?.location.x ?? 0
    return [
      { x: minX - 2, y: 0 },
      { x: maxX + 2, y: 0 }
    ]
  }

  get baseline() {
    return this
      .material(MaterialType.Card)
      .location((l) => l.type === LocationType.Pyramid && l.player === this.player && l.y === 0)
  }

  get pyramid() {
    return this
      .material(MaterialType.Card)
      .location(LocationType.Pyramid)
      .player(this.player)
  }
}