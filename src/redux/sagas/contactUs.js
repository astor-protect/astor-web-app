import {  takeEvery,put,call,all} from 'redux-saga/effects'
import {CONTACT_US_START,endContactUs} from '../actions/contactUs'
import {stopLoader} from '../actions/loader'
import {post} from "../../helpers/http";
import {get} from '../../helpers/localStorage'
import { API_END_POINT } from "../../consts/Api"

/* contact us saga */
export function* contactUsWatcher() {
    yield takeEvery(CONTACT_US_START, contactUsSaga)
}

export function* contactUsSaga(action) {
    const url = API_END_POINT.contactUs.url
    const response = yield call(post,url,action.payload,"application/json","BEARER " + get("astor_token"));
    yield all([put(stopLoader()), put(endContactUs(true))]);
  
 // yield all([put(stopLoader()), put(endContactUs(false))]);

}
/* End contact us saga */