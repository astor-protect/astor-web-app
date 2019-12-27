import { put, takeEvery, all, call } from 'redux-saga/effects'
import { post ,get} from '../../helpers/http.js'
import { LOGIN_START,LOGIN_SUCCESS, errorLogin, successLogin } from '../actions/login'
import {setProfile} from '../actions/profile'
import { stopLoader } from '../actions/loader'
import { API_END_POINT } from '../../consts/Api'
import {set} from '../../helpers/localStorage'

/* login saga */
export function* loginWatcher() {
    yield takeEvery(LOGIN_START, loginSaga)
}
export function* loginSuccessWatch(){
    yield takeEvery(LOGIN_SUCCESS,successLoginSaga)
}

export function* successLoginSaga(action){
 set("token",action.payload.token)
 set("username",action.payload.username)
 set("role",action.payload.role)
}
export function* loginSaga(action) {
    console.log("LoginSaga", action)
    const response = yield call(post, API_END_POINT.login.url, {...action.payload,grant_type:"password",client_id:"hYG2htJE"},'application/x-www-form-urlencoded')
    if (response.status ==200) {
        try{
        const data = yield call([response,'json'])
        if (data.access_token!=undefined) {
            
            yield all([put(stopLoader()),put(setProfile({...data.principal,email:action.payload.username})), put(successLogin(data.access_token,data.principal.username,data.principal.role))])
        }
        else {
            yield all([put(stopLoader()), put(errorLogin("Login ou Mot de passe incorrect"))])
        }
    }
    catch(error)
    { 
        console.error("API REQUEST[POST] ERROR[PARSING]",error)
        yield all([put(stopLoader()), put(successLogin(action.payloads))])
    }}
    else {
        const data = yield call([response,'json'])
        if(data.error==="invalid_grant")
        yield all([put(stopLoader()), put(errorLogin("Utilisateur inactif ou mot de passe incorrect"))])
        else
        yield all([put(stopLoader()), put(errorLogin("Utilisateur inactif"))])
    }
}
/* End login saga */