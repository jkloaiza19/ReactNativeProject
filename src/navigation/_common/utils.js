import { useNavigation } from '@react-navigation/native'

const navigation = useNavigation()

/**
 * The `navigate` function is used to navigate to a specific screen with optional parameters.
 * @param screen - The screen parameter is the name of the screen or route that you want to navigate
 * to. It is typically a string that corresponds to the name of a screen component in your navigation
 * stack.
 * @param [params] - The `params` parameter is an optional object that contains additional data or
 * parameters that you want to pass to the screen you are navigating to. It allows you to customize the
 * behavior or appearance of the screen based on the data you provide.
 */
export const navigate = (screen, params = {}) => navigation.navigate(screen, params)

/**
 * The goBack function uses the useNavigation hook to navigate back to the previous screen.
 */
export const goBack = () => navigation.goBack()

/**
 * The function `goBackToScreen` uses the `useNavigation` hook to navigate to a screen with the
 * specified key.
 * @param key - The key parameter is a string that represents the key of the screen you want to
 * navigate back to.
 */
export const goBackToScreen = (key) => navigation.navigate({ key })

// The reset method lets us replace the navigator state with a new state
/**
 * The function "reset" is used to reset the navigation stack with optional parameters.
 * @param [params] - The `params` parameter is an optional object that can be passed to the `reset`
 * function. It allows you to specify additional parameters or configuration options for the navigation
 * reset.
 * Example:
 * navigation.reset({
    index: 0,
    routes: [{ name: 'Home' }],
  })
 */
export const resetStack = (params = {}) => navigation.reset(params)

/**
 * The function "addListener" adds an event listener to the "useNavigation" object.
 * @param eventName - The eventName parameter is a string that represents the name of the event you
 * want to listen for.
 * @param callback - The callback is a function that will be executed when the specified event occurs.
 * It can be any valid JavaScript function that you want to run when the event is triggered.
 */
export const addListener = (eventName, callback) => navigation.addListener(eventName, callback)

/**
 * The function `isfocused` checks if the current screen is focused using the `useNavigation` hook.
 */
export const isfocused = () => navigation.isFocused()

/**
 * The function checks if the current navigation stack has a previous screen to go back to.
 */
export const canGoBack = () => navigation.canGoBack()

/**
 * The function "replace" is used to navigate to a new screen and replace the current screen in a
 * JavaScript application.
 * @param screen - The "screen" parameter is the name of the screen or route that you want to navigate
 * to. It is typically a string that represents the name of the screen component in your navigation
 * stack.
 * @param [params] - The `params` parameter is an optional object that contains additional data that
 * you want to pass to the screen being replaced. It can be used to provide information or
 * configuration to the new screen.
 */
export const replace = (screen, params = {}) => navigation.replace(screen, params)

export const reset = () => navigation.reset('root')