// Redux
import { connect } from 'react-redux'

// component
import { Home } from './Home'

// actions
import { fetchUser } from '../../redux/user/reducer'
import { signOut } from '../../redux/auth/reducer'

// schema
import { IHomeState, IHomeStateProps } from './schema'

const mapStateToProps = (state: IHomeState): IHomeStateProps => ({
  user: state.user,
  auth: state.auth,
  products: [],
})

const mapDispatchToProps = {
  fetchUser,
  signOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

