import AsyncStorage from '@react-native-async-storage/async-storage';
import type { AppStartListening } from './listenerMiddleware'
import { signIn, signOut, setIsLoggedIn, setAuthError, destroySession } from "../redux/auth/reducer"
import { setUser } from '../redux/user/reducer'
import { signInUser } from "../requests/auth"

/**
 * The `userListeners` function sets up listeners for the `fetchUser` and `updateUser` actions, which
 * make API calls to fetch and update user data respectively.
 * @param {AppStartListening} startListening - The `startListening` parameter is a function that allows
 * you to register a listener for a specific action. It takes an object as an argument with the
 * following properties:
 */
export const authListeners = (startListening:AppStartListening): void => {
  startListening({
    actionCreator: signIn,
    effect: async (action, listenerApi) => {
      try {
        const userData = await signInUser(action.payload)

        listenerApi.dispatch(setUser(userData))
        listenerApi.dispatch(setIsLoggedIn(true))
        await AsyncStorage.setItem('authToken', userData.firstName)
      } catch (error: any) {
        listenerApi.dispatch(setAuthError(error.message))
      }
    }
  })

  startListening({
    actionCreator: signOut,
    effect: async (_action, listenerApi) => {
      try {
        listenerApi.dispatch(destroySession())
        await AsyncStorage.removeItem('authToken')
      } catch (error: any) {
        listenerApi.dispatch(setAuthError(error.message))
      }
    }
  })
}



