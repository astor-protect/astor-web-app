import {LOGIN_SUCCESS,LOGIN_ERROR,LOGIN_START} from '../actions/login'
import {LOGOUT_START} from '../actions/logout'
import {get} from '../../helpers/localStorage'
const local = get("username")
const role = get("role")
const localTest = local==undefined?false:true
const initialState ={
    logged: localTest,
    logInError: "",
    authUser: localTest?{username:local,role}:{}
}
export const logIn = (state={...initialState},action)=>{
    if(action.type==LOGIN_SUCCESS) return {...state,logged:true,authUser:action.payload}
    if(action.type==LOGIN_ERROR) return {...state,logged:false,logInError: action.payloads.error}
    if(action.type==LOGIN_START) return state
    if(action.type==LOGOUT_START) return {...state,logged:false,authUser:{}}
    return state
}