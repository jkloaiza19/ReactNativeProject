import type { FetchUser } from '../../redux/user/schema'
import { IUserState } from '../../redux/user/schema'
import type { Navigation } from '../../schemas/globalSchemas'
import type { IAuthState, SignOutAction } from '../../redux/auth/schema'

export interface IHomeState {
  user: IUserState
  auth: IAuthState
}

export interface IHomeStateProps extends IHomeState {
  products?: Array<Record<string, string>> | []
}

export interface IHomeComponentProps extends IHomeStateProps {
  navigation: Navigation
  fetchUser: FetchUser
  signOut: SignOutAction
  auth: IAuthState
}