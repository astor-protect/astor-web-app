import {GET_USERS_LIST_START,GET_USERS_LIST_END,ACTIVATE_USER,ACTIVATED_USER,DELETE_USER,USER_DELETED,CHANGE_ACCOUNT_TYPE,ACCOUNT_TYPE_CHANGED} from "../actions/admin"
import {SIGNUP_SUCCESS} from '../actions/signup'

export const admin= (state={userList:[],status:false},action)=>{
    if(action.type==GET_USERS_LIST_START) return state
    if(action.type==GET_USERS_LIST_END) return {...state,userList:action.payload.data.filter(a=>
        {
            if(action.payload.role.trim()==="ROLE_SUPER_ADMINISTRATEUR")
           return  a.role.trim()==='ROLE_ADMINISTRATEUR'
           else if(action.payload.role.trim()==="ROLE_ADMINISTRATEUR")
           return "ROLE_SUPER_ADMINISTRATEUR"!==a.role.trim()
        }).sort((a,b)=>
            { if(a.username.toUpperCase()<b.username.toUpperCase())
            return -1
        })}
    if(action.type==ACTIVATE_USER) return state
    if(action.type==ACTIVATED_USER) return {...state,userList:state.userList.map((v,i)=>{
        if(i==action.payload.id) return {...v, enabled:action.payload.status}
        return v
    })}
    if(action.type==SIGNUP_SUCCESS) return {...state,userList: [...state.userList,action.payload]}
    if(action.type==DELETE_USER) return state
    if(action.type==USER_DELETED) return {...state,status:action.payload}
    if(action.type==CHANGE_ACCOUNT_TYPE) return state

    if(action.type==ACCOUNT_TYPE_CHANGED) 
    {
        if(action.payload.id==-1) return state
        if(action.payload.status)
        return {...state,userList: state.userList.map((v,i)=>{if(i==action.payload.id) return {...v,role:action.payload.role} ; return v})}
        return state
    }
        if(action.type==ACCOUNT_TYPE_CHANGED) return state
    return state
} 
