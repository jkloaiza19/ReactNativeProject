// schema
import { IAuthState, SignInAction } from '../../redux/auth/schema'
import type { Navigation } from '../../schemas/globalSchemas'

export interface ILoginState {
  auth: IAuthState
}

export interface ILoginProps extends ILoginState {
  navigation: Navigation
  signIn: SignInAction
}