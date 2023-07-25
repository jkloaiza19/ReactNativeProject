import { AppStartListening } from './listenerMiddleware'
import {
  fetchUser,
  setUser,
  fetchUserFailure,
  updateUser,
  updateUserFailure,
} from "../redux/user/reducer"
import { getUser, updateUserData } from "../requests/user"
import { formatUserData } from '../redux/user/utils'

/**
 * The `userListeners` function sets up listeners for the `fetchUser` and `updateUser` actions, which
 * make API calls to fetch and update user data respectively.
 * @param {AppStartListening} startListening - The `startListening` parameter is a function that allows
 * you to register a listener for a specific action. It takes an object as an argument with the
 * following properties:
 */
export const userListeners = (startListening:AppStartListening): void => {
  // fetchUser
  startListening({
    actionCreator: fetchUser,
    effect: async (action, listenerApi) => {
      try {
        const userData = await getUser(action.payload.id)

        listenerApi.dispatch(setUser(formatUserData(userData)))
      } catch (error) {
        listenerApi.dispatch(fetchUserFailure(error))
      }
    }
  })

  // updateUser
  startListening({
    actionCreator: updateUser,
    effect: async (action, listenerApi) => {
      try {
        const { id, user } = action.payload
        
        await updateUserData(id, user)

        listenerApi.dispatch(setUser(user))
      } catch (error) {
        listenerApi.dispatch(updateUserFailure(error))
      }
    }
  })
}



