import { put, takeEvery, all, call } from "redux-saga/effects";
import { get } from "../../helpers/http.js";
import {GET_USERS_LIST_START,getUsersListEnd,ACTIVATE_USER,activatedUser,DELETE_USER,userDeleted,CHANGE_ACCOUNT_TYPE,ACCOUNT_TYPE_CHANGED,accountTypeChanged} from "../actions/admin";
import { stopLoader } from "../actions/loader";
import { API_END_POINT } from "../../consts/Api";


export function* getUserListWatcher() {
  yield takeEvery(GET_USERS_LIST_START, getUserList);
}


/* Get user list */
export function* getUserList(action) {
  console.log("getUserList", action);
  const response = yield call(get, API_END_POINT.admin.getUsers.url);
  if (response != 401) {
    const data = yield call([response,'json'])
    if(data.content!=null)
       yield all([put(stopLoader()), put(getUsersListEnd(data.content,action.payload))]);
       else
       yield all([put(stopLoader()),put(getUsersListEnd([],action.payload))])
    } else {
      yield put(stopLoader())
    }
  
}
/* End Get user list */

export function* activateWatcher() {
  yield takeEvery(ACTIVATE_USER, activateSaga);
}

export function* activateSaga(action)
{
  console.log("Activate User", action);
  const url = action.payload.status?`${API_END_POINT.admin.activate.url}?email=${action.payload.email}`:`${API_END_POINT.admin.desactivate.url}?email=${action.payload.email}`
  const response = yield call(get,url);
  if (response != 401) {
       yield all([put(stopLoader()), put(activatedUser(action.payload.id,action.payload.status))]);

    } else {
      yield put(stopLoader())
    }
  
}

export function* deleteWatcher() {
  yield takeEvery(DELETE_USER, deleteSaga);
}

export function* deleteSaga(action)
{
  console.log("Delete User", action.payload);
  const url = `${API_END_POINT.admin.delete.url}?email=${action.payload}`
  const response = yield call(get,url);
  if (response != 401) {
       yield all([put(stopLoader()), put(userDeleted(true))])


    } else {
      yield all([put(stopLoader()), put(userDeleted(true))])
    }
  
}

export function* changeAccountWatcher() {
  yield takeEvery(CHANGE_ACCOUNT_TYPE, changeAccountSaga);
}

export function* changeAccountSaga(action)
{
  console.log("Change Account Saga", action.payload);
  const url = `${API_END_POINT.admin.changeAccount.url}?email=${action.payload.email}&newRole=${action.payload.role}`
  const response = yield call(get,url);
  if (response != 401) {
       yield all([put(stopLoader()), put(accountTypeChanged(true,action.payload.role,action.payload.id))])


    } else {
      yield all([put(stopLoader()), put(accountTypeChanged(false,action.payload.role,action.payload.id))])
    }
  
}