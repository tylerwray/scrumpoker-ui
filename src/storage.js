import { defaultCardColor } from './theme'

const CARD_COLOR_KEY = 'card-color-837'

export function getCardColor() {
  const color = localStorage.getItem(CARD_COLOR_KEY)

  return color || defaultCardColor
}

export function setCardColor(color) {
  try {
    localStorage.setItem(CARD_COLOR_KEY, color)
  } catch (err) {
    // Do Nothing
  }
}
