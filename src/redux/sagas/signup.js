import { put, takeEvery, all,call} from 'redux-saga/effects'
import {post} from '../../helpers/http.js'
import {get} from '../../helpers/localStorage'
import {SIGNUP_START, errorSignUp, successSignup} from '../actions/signup'
import {stopLoader} from '../actions/loader'
import {API_END_POINT} from '../../consts/Api'

/* Sign up saga */
export function* signUpWatcher() {
    yield takeEvery(SIGNUP_START, signupSaga)
}

export function* signupSaga(action) {
  let response
  const update = action.payload.update
  delete action.payload['update']
  if(!update)
  response= yield call(post,API_END_POINT.inscription.url, action.payload,"application/json","BEARER " + get("astor_token"))  
  else
   response = yield call(post,API_END_POINT.update.url, action.payload,"application/json","BEARER " + get("astor_token"))  
  if(response.status !== 401 && response.status!==500) {
    const data = yield call([response,'json'])
    console.log("INSCRIPTION DATA",data)
    if (data.status !== 401) {
      yield all([put(stopLoader()),put(successSignup(action.payload))])
    }
    else {
      yield all([put(stopLoader()),put(errorSignUp("Une érreur s'est produite. Veuillez reéssayer."))])
    }
  }
  else {
    yield all([put(stopLoader()),put(errorSignUp("Erreur de connexion"))])
  }
}
/* End Sign up saga */