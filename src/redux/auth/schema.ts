import { signOut, signIn } from './reducer'

// import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'

export interface IAuth {
  password: string
  email: string
}

export interface IAuthState extends IAuth {
  loading: boolean
  isLoggedIn: boolean | null
  authError: string
  token?: string | null | undefined
}

export type SignInAction = typeof signIn // ActionCreatorWithPayload<IAuth, string>

export type SignOutAction = typeof signOut // ActionCreatorWithPayload<boolean | undefined, string>