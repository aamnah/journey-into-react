import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'

// Components

// Styles
require('./styles.scss')

// Render
ReactDOM.render(
  <Router history={browserHistory} routes={routes} />
  , document.querySelector('#app')
)
