/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Card, CardId } from '@gamepark/boreal/material/Card'
import { LocationType } from '@gamepark/boreal/material/LocationType'
import { MaterialType } from '@gamepark/boreal/material/MaterialType'
import { PlayerColor } from '@gamepark/boreal/PlayerColor'
import { RuleId } from '@gamepark/boreal/rules/RuleId'
import { MaterialTutorial, Picture, TutorialStep } from '@gamepark/react-game'
import { isMoveItemType, isStartRule } from '@gamepark/rules-api'
import { Trans } from 'react-i18next'
import archive from '../images/icons/archive.png'
import compass from '../images/tokens/compass.jpg'
import victoryPoint from '../images/tokens/victory-point.png'
import { Characteristic } from '../locators/CardCharacteristicLocator'
import { TutorialSetup } from './TutorialSetup'

const me = PlayerColor.White
const opponent = PlayerColor.Black

export class Tutorial extends MaterialTutorial<PlayerColor, MaterialType, LocationType> {
  version = 1
  options = { players: [{ id: me }, { id: opponent }] }
  setup = new TutorialSetup()

  players = [{ id: me }, { id: opponent, name: 'Yuko' }]

  steps: TutorialStep[] = [
    {
      popup: {
        text: () => <Trans defaults="tuto.welcome"><strong/></Trans>
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.goal">
          <strong/>
          <Picture src={victoryPoint} css={inlineIcon}/>
        </Trans>
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.place.starting"><strong/></Trans>,
        position: { y: 15 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Card).location(LocationType.BoardCard)
        ],
        margin: {
          left: 5,
          right: 5
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.exploration.token">
          <strong/>
          <Picture src={compass} css={inlineIcon}/>
        </Trans>,
        position: { y: 28 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.ExplorationToken).id(PlayerColor.White)
        ],
        staticItems: [
          { type: MaterialType.Board, item: { location: { type: LocationType.Board } } }
        ],
        margin: { bottom: 10 }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.exploration.phase"><strong/></Trans>,
        position: { y: 10 }
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.discover"><strong/></Trans>,
        position: { y: 23 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Card).location((l) => l.type === LocationType.BoardCard && l.x! < 5),
          this.material(game, MaterialType.ExplorationToken).id(PlayerColor.White)
        ],
        margin: {
          left: 5, right: 20, top: 5, bottom: 20
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.discover.place"><strong/></Trans>
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Card).location(LocationType.BoardCard).id(({ front }: any) => front === Card.BlueStart2),
          this.material(game, MaterialType.ExplorationToken).id(PlayerColor.White)
        ],
        locations: [
          this.location(LocationType.Pyramid).player(me).x(0).y(0).location
        ],
        margin: {
          top: 2,
          bottom: 2
        }
      }),
      move: {
        filter: (move, game) => isMoveItemType(MaterialType.Card)(move)
          && move.location.type === LocationType.Pyramid
          && game.items[move.itemType]![move.itemIndex].id?.front === Card.BlueStart2,
        interrupt: isMoveItemType(MaterialType.ExplorationToken)
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.cost"><strong/></Trans>,
        position: { y: -15 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Card).location(LocationType.Pyramid)
        ],
        locations: [
          this
            .location(LocationType.CardCharacteristics)
            .id(Characteristic.Cost)
            .parent(this.material(game, MaterialType.Card).location((location) => location.type === LocationType.Pyramid && location.player === me).getIndex())
            .location
        ],
        margin: {
          top: 2,
          bottom: 2
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.pay"><strong/></Trans>,
        position: { y: 15 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.ExplorationToken).id(PlayerColor.White)
        ],
        scale: 0.5,
        margin: { bottom: 10 }
      }),
      move: {
        interrupt: isMoveItemType(MaterialType.ExplorationToken)
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.savior"><strong/></Trans>,
        position: { y: -15 }
      },
      focus: (game) => ({
        locations: [
          this
            .location(LocationType.CardCharacteristics)
            .id(Characteristic.Savior)
            .parent(this.material(game, MaterialType.Card).location((location) => location.type === LocationType.Pyramid && location.player === me).getIndex())

            .location
        ],
        margin: {
          top: 2,
          bottom: 2,
          left: 5.65
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.rest.phase"><strong/></Trans>,
        position: { y: -15 }
      },
      focus: (game) => ({
        locations: [
          this
            .location(LocationType.CardCharacteristics)
            .id(Characteristic.RestBonus)
            .parent(this.material(game, MaterialType.Card).location((location) => location.type === LocationType.Pyramid && location.player === me).getIndex())
            .location
        ],
        margin: {
          top: 2,
          bottom: 2,
          left: 6.2
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.rest.gain"><strong/></Trans>,
        position: { y: 10 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.ExplorationToken).id(PlayerColor.White)
        ],
        scale: 0.5,
        margin: { bottom: 10 }
      }),
      move: {}
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.opponent"><strong/></Trans>,
        position: { y: 10 }
      }
    },
    {
      move: {
        player: opponent,
        filter: (move, game) => isMoveItemType(MaterialType.Card)(move) && move.location.type === LocationType.Pyramid
          && game.items[move.itemType]![move.itemIndex].id?.front === Card.GreenStart2,
        interrupt: (move) => isStartRule(move) && move.id === RuleId.Rest
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.opponent.discover"><strong/></Trans>,
        position: { y: 10 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Card).location(LocationType.Pyramid).player(opponent),
          this.material(game, MaterialType.ExplorationToken).id(PlayerColor.Black)
        ],
        staticItems: [
          { type: MaterialType.Board, item: { location: { type: LocationType.Board } } }
        ],
        margin: {
          top: 5
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.place.help"><strong/></Trans>,
        position: { y: 10 }
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.opponent.rest"><strong/></Trans>,
        position: { y: 10 }
      },
      move: {}
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.place.2"><strong/></Trans>,
        position: { y: 10 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Card).location(LocationType.BoardCard).id(({ front }: any) => front === Card.GreenStart3),
          this.material(game, MaterialType.ExplorationToken).id(PlayerColor.White)
        ],
        locations: [
          this.location(LocationType.Pyramid).player(me).x(2).y(0).location
        ],
        margin: {
          top: 2,
          bottom: 2
        }
      }),
      move: {
        filter: (move, game) => isMoveItemType(MaterialType.Card)(move)
          && move.location.type === LocationType.Pyramid
          && move.location.x === 2
          && game.items[move.itemType]![move.itemIndex].id?.front === Card.GreenStart3,
        interrupt: (move) => isStartRule(move) && move.id === RuleId.Rest
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.effect.left"><strong/></Trans>,
        position: { y: -15 }
      },
      focus: (game) => ({
        locations: [
          this
            .location(LocationType.CardCharacteristics)
            .id(Characteristic.Effect)
            .parent(this.material(game, MaterialType.Card).id<CardId>(id => id?.front === Card.GreenStart3).getIndex())
            .location,
          this
            .location(LocationType.CardCharacteristics)
            .id(Characteristic.Savior)
            .parent(this.material(game, MaterialType.Card).id<CardId>(id => id?.front === Card.BlueStart2).getIndex())
            .location
        ]
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.bonus.0"><strong/></Trans>,
        position: { y: 10 }
      },
      move: {}
    },
    {
      move: {
        player: opponent,
        filter: (move, game) =>
          isMoveItemType(MaterialType.Card)(move)
          && move.location.type === LocationType.Pyramid
          && move.location.x === 2
          && game.items[move.itemType]![move.itemIndex].id?.front === Card.YellowStart1
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.opponent.2"><strong/></Trans>,
        position: { y: -10 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Card).id((id: any) => id?.front === Card.YellowStart1)
        ],
        margin: {
          top: 2,
          bottom: 2
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.reserve.1"><strong/></Trans>,
        position: { y: 20 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Card).id((id: any) => id?.front === Card.Yellow6)
        ],
        margin: {
          top: 2,
          bottom: 10
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.reserve.2"><strong/></Trans>,
        position: { y: 10 }
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.reserve.place"><strong/></Trans>
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Card).location(LocationType.BoardCard).id(({ front }: any) => front === Card.Yellow6)
        ],
        locations: [
          this.location(LocationType.Reserve).player(me).location
        ],
        margin: {
          top: 2,
          bottom: 2
        }
      }),
      move: {
        player: me,
        filter: (move, game) => isMoveItemType(MaterialType.Card)(move)
          && move.location.type === LocationType.Reserve
          && this.material(game, MaterialType.Card).getItem(move.itemIndex)?.id?.front === Card.Yellow6,
        interrupt: (move) => isStartRule(move) && move.id === RuleId.Rest
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.reserve.free"><strong/></Trans>,
        position: { y: 10 }
      }
    },
    {
      popup: {
        text: () => <Trans defaults="help.card.archive.limit">
          <strong/>
          <Picture src={archive} css={[inlineIcon, css`filter: drop-shadow(0em 0em 0.05em black) drop-shadow(0em 0em 0.05em black)`]}/>
        </Trans>,
        position: { y: 20 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Card).location(LocationType.BoardCard).location((l) => l.x === 6)
        ],
        margin: {
          top: 2,
          bottom: 10
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.rest.2"><strong/></Trans>,
        position: { y: 10 }
      },
      move: {}
    },
    {
      move: {
        player: opponent,
        filter: (move, game) => isMoveItemType(MaterialType.Card)(move)
          && move.location.type === LocationType.Pyramid
          && game.items[move.itemType]![move.itemIndex]?.id?.front === Card.Green6
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.discover.reserve"><strong/></Trans>,
        position: { y: 10 }
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.pyramid.max"><strong/></Trans>,
        position: { x: 35 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Card).location(LocationType.Pyramid).player(me)
        ],
        locations: [
          this.location(LocationType.Pyramid).player(me).y(0).x(-2).location,
          this.location(LocationType.Pyramid).player(me).y(0).x(4).location,
          this.location(LocationType.Pyramid).player(me).y(1).x(1).location,
          this.location(LocationType.Pyramid).player(me).y(1).x(-1).location,
          this.location(LocationType.Pyramid).player(me).y(1).x(3).location,
          this.location(LocationType.Pyramid).player(me).y(2).x(0).location,
          this.location(LocationType.Pyramid).player(me).y(2).x(2).location,
          this.location(LocationType.Pyramid).player(me).y(3).x(1).location
        ],
        margin: {
          bottom: 2,
          top: 1,
          right: 30
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.pyamid.top"><strong/></Trans>,
        position: { y: -24 }
      },
      focus: () => ({
        locations: [
          this.location(LocationType.Pyramid).player(me).y(0).x(-2).location,
          this.location(LocationType.Pyramid).player(me).y(0).x(4).location,
          this.location(LocationType.Pyramid).player(me).y(1).x(1).location
        ],
        margin: {
          bottom: 12,
          top: 1
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.compass.ignored"><strong/></Trans>
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.place.baseline"><strong/></Trans>
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.Card).location(LocationType.Reserve).player(me)
        ],
        locations: [
          this.location(LocationType.Pyramid).player(me).y(0).x(-2).location,
          this.location(LocationType.Pyramid).player(me).y(0).x(4).location
        ],
        margin: {
          bottom: 12,
          top: 1
        }
      }),
      move: {
        player: me,
        filter: (move, game) => isMoveItemType(MaterialType.Card)(move)
          && move.location.type === LocationType.Pyramid
          && move.location.y === 0
          && game.items[move.itemType]![move.itemIndex].location.type === LocationType.Reserve
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.effects"><strong/></Trans>,
        position: { y: 10 }
      },
      focus: game => ({
        materials: [
          this.material(game, MaterialType.Card).location(LocationType.BoardCard).location((l) => l.x === 4)
        ],
        scale: 0.6,
        margin: { bottom: 20 }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.end.trigger"><strong/></Trans>
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.go"><strong/></Trans>
      }
    }
  ]
}

export const inlineIcon = css`
  height: 1em;
  vertical-align: sub;
`
