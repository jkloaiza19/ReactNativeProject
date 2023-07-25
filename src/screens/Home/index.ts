// Redux
import { connect } from 'react-redux'

// component
import { Home } from './Home'

// actions
import { fetchUser } from '../../redux/user/reducer'

// schema
import { IHomeState, IHomeStateProps } from './schema'

const mapStateToProps = (state: IHomeState): IHomeStateProps => ({
  user: state.user,
  products: [],
})

const mapDispatchToProps = {
  fetchUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

