/* eslint-disable semi */
import { combineReducers } from '@reduxjs/toolkit'
import user from './user/reducer'
import auth from './auth/reducer'

export default combineReducers({
  user,
  auth,
})
