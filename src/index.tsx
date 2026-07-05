import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles'

import App from './App'

import * as serviceWorker from './serviceWorker'
import smoothscroll from 'smoothscroll-polyfill'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

serviceWorker.register()

smoothscroll.polyfill()
