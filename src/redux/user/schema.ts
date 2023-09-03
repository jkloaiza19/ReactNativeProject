export enum employmentStatus {
  unemployed,
  employed,
  entreprenour,
  selfEmployed,
}

export type featureFlags = Record<string, string>

export interface IUser {
  // id: string | number
  // name: string
  // lastName: string
  // email: string
  // employmentStatus: employmentStatus | null
  // featureFlags?: featureFlags | {}
  name: string
  hair: string
  dob: string
  gender: string
  mass: string
}

export interface IUserState extends IUser{
  // user: IUser
  loading: boolean
  loaded: boolean
  error: string
}

export interface IGenericState<T> {
  data: T
  errors?: Array<string>
}

export interface IMappedState {
  [key: string]: string | number | object
}