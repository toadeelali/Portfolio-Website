import React from 'react'
import ReactDOM from 'react-dom'
import './styles'

import App from './App'

import * as serviceWorker from './serviceWorker'
import smoothscroll from 'smoothscroll-polyfill'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register()

smoothscroll.polyfill()
