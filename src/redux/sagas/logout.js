import {  takeEvery,put} from 'redux-saga/effects'
import {LOGOUT_START,endLogout} from '../actions/logout'
import {remove} from '../../helpers/localStorage'

/* logout saga */
export function* logoutWatcher() {
    yield takeEvery(LOGOUT_START, logoutSaga)
}


export function* logoutSaga(action) {
    console.log("LogoutSaga", action)
    remove("username")
    remove("role")
    remove("token")
    yield put(endLogout())
    
}
/* End logout saga */