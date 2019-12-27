import {SET_PROFILE,GET_PROFILE,UPDATE_PHOTO_URL} from '../actions/profile'
import {CHANGE_ACCOUNT_TYPE} from "../actions/admin"

export const profile = (state={user:{}},action)=>{
    if(action.type===SET_PROFILE) return {...state,user:action.payload}
    if(action.type===GET_PROFILE) return state.user
    if(action.type===UPDATE_PHOTO_URL) return {...state,user:{...state.user,photourl:action.payload}}
    if(action.type===CHANGE_ACCOUNT_TYPE) return {...state,user:{...state.user,role:action.payload.role}}
    return state
}