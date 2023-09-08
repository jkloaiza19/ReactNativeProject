import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IAuth, IAuthState } from './schema'

const initialState: IAuthState = {
  loading: false,
  isLoggedIn: null,
  authError: '',
  email: '',
  password: '',
  token: null,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state: IAuthState, action: PayloadAction<IAuth>) => {
      return {
        ...state,
        ...action.payload,
        loading: true,
      }
    },
    setIsLoggedIn: (state: IAuthState, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoggedIn: action.payload,
        loading: false,
      }
    },
    signOut: (state: IAuthState) => {
      return {
        ...state,
      }
    },
    destroySession: (state: IAuthState) => {
      return {
        ...state,
        isLoggedIn: false,
        token: null,
      }
    },
    setAuthError: (state: IAuthState, action: PayloadAction<string>) => {
      return {
        ...state,
        authError: action.payload,
      }
    },
  }
})

export const {
  signIn,
  setIsLoggedIn,
  signOut,
  setAuthError,
  destroySession,
} = slice.actions

export const selectIsLoggedIn = (state: Record<string, any>) => state.auth.isLoggedIn
export const selectToken = (state: Record<string, any>) => state.auth.token

export default slice.reducer