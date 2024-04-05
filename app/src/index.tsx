/** @jsxImportSource @emotion/react */
import { BorealOptionsSpec } from '@gamepark/boreal/BorealOptions'
import { BorealRules } from '@gamepark/boreal/BorealRules'
import { BorealSetup } from '@gamepark/boreal/BorealSetup'
import { GameProvider, MaterialGameAnimations, setupTranslation } from '@gamepark/react-game'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Locators } from './locators/Locators'
import { Material } from './material/Material'
import translations from './translations.json'

setupTranslation(translations, { debug: false })

ReactDOM.render(
  <StrictMode>
    <GameProvider game="boreal" Rules={BorealRules} optionsSpec={BorealOptionsSpec} GameSetup={BorealSetup}
                  material={Material} locators={Locators} animations={new MaterialGameAnimations()}>
      <App/>
    </GameProvider>
  </StrictMode>,
  document.getElementById('root')
)
