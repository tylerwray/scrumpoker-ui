const defaultState = {
  selected: 0,
  numbers: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_NUMBER':
      return {
        ...state,
        selected: action.payload.number
      }
    default:
      return state
  }
}
