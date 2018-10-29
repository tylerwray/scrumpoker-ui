import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Layout from './Layout'
import { PokerContext, defaultNumbers } from './PokerContext'
import { ThemeContext, defaultCardColor } from '../theme'

const CARD_COLOR_KEY = 'card-color-837'

function getCardColor() {
  const color = localStorage.getItem(CARD_COLOR_KEY)

  return color || defaultCardColor
}

function setCardColor(color) {
  try {
    localStorage.setItem(CARD_COLOR_KEY, color)
  } catch (err) {
    // Do Nothing
  }
}

function App() {
  const [selected, setSelected] = useState(0)
  const numbers = defaultNumbers
  const [theme, setTheme] = useState({
    cardColor: getCardColor()
  })

  useEffect(
    () => {
      setCardColor(theme.cardColor)
    },
    [theme.cardColor]
  )

  function updateTheme(newTheme) {
    setTheme({
      ...theme,
      ...newTheme
    })
  }

  return (
    <PokerContext.Provider
      value={{
        selected,
        numbers,
        changeSelected: setSelected
      }}
    >
      <ThemeContext.Provider
        value={{
          theme,
          updateTheme
        }}
      >
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </ThemeContext.Provider>
    </PokerContext.Provider>
  )
}

export default App
