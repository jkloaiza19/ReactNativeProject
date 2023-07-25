import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer from './src/redux/rootReducer'
import rootSaga from './src/sagas/rootSaga'
import { listenerMiddleware } from './src/listeners/listenerMiddleware'

// create the saga middleware
// const sagaMiddleware = createSagaMiddleware()
// const middleware = [sagaMiddleware]
const middleware = []

if (__DEV__ && process.env.NODE_ENV !== 'test') {
  // create logger
  const logger = createLogger({ collapsed: true })

  middleware.push(logger)
}

const store = configureStore({
  reducer: rootReducer,
  enhancers: [compose(applyMiddleware(...middleware))],
  // middleware: [sagaMiddleware] as const,
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware)
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})

// then run the saga
// sagaMiddleware.run(rootSaga)

// export type sagaMiddleware = typeof sagaMiddleware

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
