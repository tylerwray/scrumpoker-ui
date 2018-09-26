import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Layout from './Layout'
import { PokerContext } from './PokerContext'
import { ThemeContext } from '../theme'
import { getCardColor, setCardColor } from '../storage'

class App extends React.Component {
  state = {
    selected: 0,
    numbers: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144],
    theme: {
      cardColor: getCardColor()
    }
  }

  constructor(props) {
    super(props)
    this.changeSelected = this.changeSelected.bind(this)
    this.updateTheme = this.updateTheme.bind(this)
  }

  changeSelected(selected) {
    this.setState({
      selected
    })
  }

  updateTheme(theme) {
    this.setState(prevState => {
      if (theme.cardColor) {
        setCardColor(theme.cardColor)
      }

      return {
        theme: {
          ...prevState.theme,
          ...theme
        }
      }
    })
  }

  render() {
    const { selected, numbers, theme } = this.state
    return (
      <PokerContext.Provider
        value={{
          selected,
          numbers,
          changeSelected: this.changeSelected
        }}
      >
        <ThemeContext.Provider
          value={{
            theme,
            updateTheme: this.updateTheme
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
}

export default App
