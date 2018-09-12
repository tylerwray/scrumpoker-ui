export default function(state = 0, action) {
  switch (action.type) {
    case 'CHANGE_NUMBER':
      return action.payload.number
    default:
      return state
  }
}
