import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { Provider } from 'react-redux'

import { configureStore } from '../state/store'

import './App.css'

function App() {
  const store = configureStore()

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
