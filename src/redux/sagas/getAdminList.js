import { put, takeEvery, all, call } from "redux-saga/effects";
import { get } from "../../helpers/http.js";
import { GET_ADMIN_LIST_START, getAdminListSuccess, getAdminListError } from "../actions/getAdminList";
import { stopLoader } from "../actions/loader";
import { API_END_POINT } from "../../consts/Api";


export function* getAdminListWatcher() {
  yield takeEvery(GET_ADMIN_LIST_START, getAdminListSaga);
}

/* Get admin list */
export function* getAdminListSaga(action) {
  console.log("getAdminList", action);

  const response = yield call(get, API_END_POINT.root.getUsers.url, action.payloads);
  if (response != 401) {
    const data = response.json();
    if (data.status === 200) {
      yield all([put(stopLoader()), put(getAdminListSuccess(data))]);
    } else {
      yield all([
        put(stopLoader()),
        put(getAdminListError("Une érreur s'est produite. Veuillez reéssayer"))
      ]);
    }
  } else {
    yield all([put(stopLoader()), put(getAdminListError("Erreur de connexion"))]);
  }
}
/* End Get admin list */
