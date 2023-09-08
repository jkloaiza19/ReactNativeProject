// Redux
import { connect } from 'react-redux'
import { RootState } from '../../../store'

// selectors
import { selectCurrentUser } from '../../redux/user/selectors'

// schema
import { IPlacesProps } from './schema'

// component
import { Places } from './Places'

const mapStateToProps = (state: RootState): IPlacesProps => ({
  user: selectCurrentUser(state),
  places: [],
})

export default connect(mapStateToProps, null)(Places)