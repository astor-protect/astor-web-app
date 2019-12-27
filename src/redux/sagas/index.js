import { all } from "redux-saga/effects";
import {loginWatcher } from './login'
import {signUpWatcher } from './signup'
import {getAdminListWatcher} from './getAdminList'
import {loginSuccessWatch} from './login'
import {logoutWatcher} from './logout'
import {requestCodeWatcher,resetPasswordWatcher,checkTokenWatcher} from './requestPassword'
import {getUserListWatcher,activateWatcher,deleteWatcher,changeAccountWatcher} from './admin'
import {contactUsWatcher} from './contactUs'

export default function* rootSaga() {
  yield all([
    loginWatcher(),
    logoutWatcher(),
    loginSuccessWatch(),
    signUpWatcher(),
    getAdminListWatcher(),
    getUserListWatcher(),
    activateWatcher(),
    requestCodeWatcher(),
    resetPasswordWatcher(),
    contactUsWatcher(),
    deleteWatcher(),
    changeAccountWatcher(),
    checkTokenWatcher()
  ])
}