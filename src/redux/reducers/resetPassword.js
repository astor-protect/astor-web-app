import {REQUEST_CODE_START,REQUEST_CODE_END,RESET_PASSWORD_START,RESET_PASSWORD_END} from '../actions/resetPassword'
export const resetPassword = (state={code:"",status:false},action)=>{
    if(action.type==REQUEST_CODE_START) return state
    if(action.type==REQUEST_CODE_END) return {...state,code:action.payload} 
    if(action.type==RESET_PASSWORD_START) return state
    if(action.type==RESET_PASSWORD_END) return {...state,status:action.payload} 

    return state
}