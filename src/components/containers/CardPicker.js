import { connect } from 'react-redux'

import { changeNumber } from '../../state/actions'
import { selectNumbers } from '../../state/selectors'

import Picker from '../pure/Picker'

export default connect(
  state => ({
    numbers: selectNumbers(state)
  }),
  dispatch => ({
    onClick(number) {
      dispatch(changeNumber(number))
    }
  })
)(Picker)
