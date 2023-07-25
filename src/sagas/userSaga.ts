import { all, call, put, takeEvery } from 'redux-saga/effects'
import { fetchUser, setUser, fetchUserFailure } from '../redux/user/reducer'
import { getUser } from '../requests/user'
import { formatUserData } from '../redux/user/utils'

function* handleFetchUser(): any {
    try {
        const usersData = yield call(getUser, 1)

        yield put(setUser(formatUserData(usersData)))
    } catch (error: any) {
        yield put(fetchUserFailure(error))
    }
}

function* watchUser() {
    yield all([takeEvery(fetchUser.type, handleFetchUser)])
}

export default watchUser