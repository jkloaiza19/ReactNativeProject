/* eslint-disable semi */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUserState } from './schema'

const initialState: IUserState = {
  loading: false,
  loaded: false,
  error: '',
  createdAt: null,
  updatedAt: null,
  email: '',
  firstName: '',
  lastName: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUser: (state: IUserState, _action: PayloadAction<{id: number}>) => ({
      ...state,
      loading: true,
    }),
    setUser: (state: IUserState, action: PayloadAction<IUser>) => ({
      ...state,
      ...action.payload,
      loading: false,
      loaded: true,
    }),
    updateUser: (state: IUserState, _action: PayloadAction<{id: number, user: IUser}>) => ({
      ...state,
      loading: true,
    }),
    fetchUserFailure: (state: IUserState, action: PayloadAction<string>) => ({
      ...state,
      loading: false,
      loaded: false,
      error: action.payload,
    }),
      updateUserFailure: (state: IUserState, action: PayloadAction<string>) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
})

export const {
  fetchUser,
  setUser,
  fetchUserFailure,
  updateUser,
  updateUserFailure,
} = userSlice.actions

export default userSlice.reducer
