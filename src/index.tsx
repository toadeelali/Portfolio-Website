import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles'

import App from './App'

import * as serviceWorker from './serviceWorker'
import smoothscroll from 'smoothscroll-polyfill'

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

serviceWorker.register()

smoothscroll.polyfill()
