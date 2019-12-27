/* reset password */
export const REQUEST_CODE_START = 'REQUEST_CODE_START'
export const REQUEST_CODE_END = 'REQUEST_CODE_END'
export const RESET_PASSWORD_START= 'RESET_PASSWORD_START'
export const RESET_PASSWORD_END= 'RESET_PASSWORD_END'
export const CHECK_TOKEN = 'CHECK_TOKEN_START'
export const requestCodeStart = (email) => ({ type: REQUEST_CODE_START, payload: email})
export const requestCodeEnd = (code) => ({ type: REQUEST_CODE_END, payload: code})
export const resetPasswordStart = (email,password)=>({type:RESET_PASSWORD_START,payload:{email,password}})
export const resetPasswordEnd = (status)=>({type:RESET_PASSWORD_END,payload:status})
export const checkToken= (email,token)=>({type:CHECK_TOKEN,payload:{email,token}})
/* reset password */