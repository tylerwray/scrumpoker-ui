import React from 'react'

import { PokerContext } from './PokerContext'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

class App extends React.Component {
  state = {
    selected: 0,
    numbers: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
  }

  constructor(props) {
    super(props)
    this.changeSelected = this.changeSelected.bind(this)
  }

  changeSelected(selected) {
    this.setState({
      selected
    })
  }

  render() {
    const { selected, numbers } = this.state

    return (
      <PokerContext.Provider
        value={{
          selected,
          numbers,
          changeSelected: this.changeSelected
        }}
      >
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </PokerContext.Provider>
    )
  }
}

export default App
