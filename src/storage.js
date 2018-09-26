const CARD_COLOR_KEY = 'card-color-837'
export function getCardColor() {
  const defaultCardColor = '#0097a7'

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
