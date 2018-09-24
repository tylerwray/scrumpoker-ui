import { connect } from 'react-redux'

import { selectSelected } from '../../state/selectors'

import Selected from '../pure/Selected'

function mapStateToProps(state) {
  return {
    selected: selectSelected(state)
  }
}

export default connect(mapStateToProps)(Selected)
