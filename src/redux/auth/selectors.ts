import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../../store'

const selectToken = (state: RootState) => state.auth.token

export const selectAuthToken = createSelector(selectToken, (token) => token)