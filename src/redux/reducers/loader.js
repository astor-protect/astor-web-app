import {LOADER_START,LOADER_END} from '../actions/loader'

export const loader = (state={loader:false},action)=>{
    if(action.type==LOADER_START) return {loader:true}
    if(action.type==LOADER_END) return {loader:false }
    return state
}