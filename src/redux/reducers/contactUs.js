import {CONTACT_US_START,CONTACT_US_END} from '../actions/contactUs'

export const contactUs = (state={status:""},action)=>{
    if(action.type===CONTACT_US_START) return state
    if(action.type===CONTACT_US_END) return {...state,status:action.payload}
    return state
}