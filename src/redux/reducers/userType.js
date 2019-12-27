import {PARTICULAR,PROFESSIONAL} from '../actions/userType'

const pathName = window.location.pathname
const type = PARTICULAR
if(["/business","/sectors","/who_are_we_p"].includes(pathName)) 
type= PROFESSIONAL

export const userType = (state={type},action)=>{
    if(action.type===PARTICULAR) return {...state,type:PARTICULAR}
    if(action.type===PROFESSIONAL) return {...state,type:PROFESSIONAL}
    return state
}