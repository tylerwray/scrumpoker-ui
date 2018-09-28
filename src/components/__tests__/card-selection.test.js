import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'

import Picker from '../Picker'
import { PokerContext } from '../PokerContext'
import { ThemeContext } from '../../theme'

afterEach(cleanup)

describe('Card Selection', () => {
  it('should render a card for each number', () => {
    const theme = {
      theme: {}
    }
    const poker = {
      numbers: [1, 2, 3]
    }

    const { getByText } = render(
      <ThemeContext.Provider value={theme}>
        <PokerContext.Provider value={poker}>
          <Picker />
        </PokerContext.Provider>
      </ThemeContext.Provider>
    )

    poker.numbers.forEach(n => {
      const node = getByText(n.toString())

      expect(node).toBeTruthy()
    })
  })

  it('should navigate to the /ready page when a card is clicked', () => {
    const history = []
    const theme = {
      theme: {}
    }
    const poker = {
      numbers: [144],
      changeSelected: jest.fn()
    }

    const { getByText } = render(
      <ThemeContext.Provider value={theme}>
        <PokerContext.Provider value={poker}>
          <Picker history={history} />
        </PokerContext.Provider>
      </ThemeContext.Provider>
    )

    fireEvent.click(getByText('144'))

    expect(history[0]).toBe('/ready')
    expect(poker.changeSelected).toHaveBeenCalledWith(144)
  })
})
