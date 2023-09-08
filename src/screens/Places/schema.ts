import { IUserState } from '../../redux/user/schema'
import type { Navigation } from '../../schemas/globalSchemas'

export type Location = {
  lat: number
  lng: number
}

export interface ILocation {
  title: string
  image: string
  address: string
  location: Location
}

export interface IPlacesState {
  user: IUserState
}

export interface IPlacesProps extends IPlacesState {
  places?: ILocation[] | null
}