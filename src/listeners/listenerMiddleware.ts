/* The middleware code is fully TS-typed. However,
 * the startListening and addListener functions do not know what
 * the store's RootState type looks like by default, so getState() will return unknown.
 * To fix this, the middleware provides types for defining "pre-typed" versions of those methods,
 * similar to the pattern used for defing pre-typed React-Redux hooks.
 * We specifically recommend creating the middleware instance in a separate file
 * from the actual configureStore() call:
 */
import { createListenerMiddleware, addListener } from "@reduxjs/toolkit"
import type { TypedStartListening, TypedAddListener } from "@reduxjs/toolkit"

import type { RootState, AppDispatch } from '../../store'

// listeners
import { userListeners } from "./userListener"

export const listenerMiddleware = createListenerMiddleware()
export type AppStartListening = TypedStartListening<RootState, AppDispatch>
export const startAppListening = listenerMiddleware.startListening as AppStartListening
export const addAppListener = addListener as TypedAddListener<RootState, AppDispatch>

// Run listeners
// Reference: https://redux-toolkit.js.org/api/createListenerMiddleware#organizing-listeners-in-files
userListeners(startAppListening)

