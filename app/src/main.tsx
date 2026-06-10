import { BorealOptionsSpec } from '@gamepark/boreal/BorealOptions'
import { BorealRules } from '@gamepark/boreal/BorealRules'
import { BorealSetup } from '@gamepark/boreal/BorealSetup'
import { GameProvider, MaterialGameAnimations } from '@gamepark/react-game'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { Locators } from './locators/Locators'
import { Material } from './material/Material'
import { Tutorial } from './tutorial/Tutorial'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameProvider
      game="boreal"
      Rules={BorealRules}
      optionsSpec={BorealOptionsSpec}
      GameSetup={BorealSetup}
      material={Material}
      locators={Locators}
      animations={new MaterialGameAnimations()}
      tutorial={new Tutorial()}
    >
      <App />
    </GameProvider>
  </StrictMode>
)
