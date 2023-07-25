import { isAnyOf } from '@reduxjs/toolkit'
import { call, put, takeEvery, all } from 'redux-saga/effects'
import watchUser from './userSaga'

function* rootSaga() {
    yield all([call(watchUser)])
}

export default rootSaga
