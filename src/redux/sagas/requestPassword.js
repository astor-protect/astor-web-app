import { put, takeEvery, all, call } from "redux-saga/effects";
import { get,post} from "../../helpers/http";
import {get as getLocal} from '../../helpers/localStorage'
import { stopLoader } from "../actions/loader";
import { API_END_POINT } from "../../consts/Api"
import {REQUEST_CODE_START,requestCodeEnd,RESET_PASSWORD_START,resetPasswordEnd,CHECK_TOKEN} from '../actions/resetPassword'

export function* requestCodeWatcher() {
    yield takeEvery(REQUEST_CODE_START, requestCodeSaga);
}
/*requestCodeSaga*/
export function* requestCodeSaga(action) {
    console.log("requestCodeSaga", action);
    const url = `${API_END_POINT.reset.requestCode.url}?email=${action.payload}`
    const emailUrl = `${API_END_POINT.reset.checkEmail.url}?email=${action.payload}` 
    const emailResponse = yield call(get,emailUrl,"get")
    const userExist = yield call([emailResponse,'json'])
    if(userExist)
    {
        
    const response = yield call(get,url);
    const data = yield call([response,'json'])
    yield all([put(stopLoader()), put(requestCodeEnd(true))]);
    }
    else{
        yield all([put(stopLoader()),put(requestCodeEnd(-1))])
    }

}
/* requestCodeSaga */

export function* resetPasswordWatcher() {
    yield takeEvery(RESET_PASSWORD_START, resetPasswordSaga);
}
/*resetPasswordSaga*/
export function* resetPasswordSaga(action) {
    console.log("resetPasswordSaga", action);
    const url = `${API_END_POINT.reset.resetPassword.url}`
    const response = yield call(post,url,action.payload,"application/json","BEARER " + getLocal("astor_token"))
    if(response.status==200)
    yield all([put(stopLoader()), put(resetPasswordEnd(true))]);
    else
    yield all([put(stopLoader()), put(resetPasswordEnd(false))]);


}
/* resetPasswordSaga */

/* checkTokenWatcher */

export function* checkTokenWatcher() {
    yield takeEvery(CHECK_TOKEN, checkTokenSaga);
}
/*checkTokenSaga*/
export function* checkTokenSaga(action) {
    console.log("checkTokenSaga", action);
    const url = `${API_END_POINT.reset.checkToken.url}?email=${action.payload.email}&token=${action.payload.token}`
    const response = yield call(get,url)
    const data = yield call([response,'json'])
    
    if(data)
    yield all([put(stopLoader()), put(requestCodeEnd(-3))]);
    else
    yield all([put(stopLoader()), put(requestCodeEnd(-2))]);


}
/* resetPasswordSaga */