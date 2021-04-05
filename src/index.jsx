import React from 'react'
import { render } from 'react-dom'
// redux
import { Provider } from 'react-redux'
import store from '@/redux/store.js'
// components
import App from '@/App'
// styles
import './index.css'
import '@/assets/scss/material-kit-react.scss?v=1.9.0'

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
