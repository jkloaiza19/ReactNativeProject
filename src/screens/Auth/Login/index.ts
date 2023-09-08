// Redux
import { connect } from 'react-redux'

// actions
import { signIn } from '../../../redux/auth/reducer'

// schema
import type { ILoginState } from './schema'

import { Login } from './Login'

const mapStateToProps = (state: ILoginState) => ({
  auth: state.auth,
})

const mapDispatchToProps = {
  signIn,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
