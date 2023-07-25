import { IUser } from '../../redux/user/schema'

export interface IHomeState {
  user: IUser
}

export interface IHomeStateProps extends IHomeState {
  products?: Array<Record<string, string>> | []
}

export interface IHomeComponentProps extends IHomeStateProps {
  navigation: Record<string, string>
  fetchUser: () => void
}