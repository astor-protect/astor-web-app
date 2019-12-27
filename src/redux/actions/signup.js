/* Signup */
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

export const startSignup = (data,update=false) => ({ type: SIGNUP_START, payload: {...data,update} });
export const errorSignUp = (error) => ({ type: SIGNUP_ERROR, payload: { error }})
export const successSignup = (user) => ({ type: SIGNUP_SUCCESS,payload:user });

/* End Signup */


const LOGOUT_START = "LOGOUT_START"
const LOGOUT_END = 'LOGOUT_END'
const PASSWORD_RESET_START = 'PASSWORD_RESET_START'
const PASSWORD_RESET_END = 'PASSWORD_RESET_END'
const ACCOUNT_EDITION_START = 'ACCOUNT_EDITION_START'
const ACCOUNT_EDITION_END = 'ACCOUNT_EDITION_END'
const MODAL_START = 'LOGIN_START'
const MODAL_END = 'LOGIN_END'
const DELETE_ACCOUNT_START = 'DELETE_ACCOUNT_START'
const DELETE_ACCOUNT_END = 'DELETE_ACCOUNT_END'


export const startResetPassword = (newpassword) => ({ type: PASSWORD_RESET_START, payloads: newpassword})
export const endResetPassword = () => ({ type: PASSWORD_RESET_END })

export const startLogout = () => ({ type: LOGOUT_START })
export const endLogout = () => ({ type: LOGOUT_END })

export const editAccountStart = (data) => ({ type: ACCOUNT_EDITION_START, payloads: data })
export const editAccounEnd = () => ({ type: ACCOUNT_EDITION_END })

export const openModal = () => ({ type: MODAL_START })
export const closeModal = () => ({ type: MODAL_END })

export const deleteAccountStart = (id) => ({ type: DELETE_ACCOUNT_START, payloads: id })
export const deleteAccountEnd = () => ({ type: DELETE_ACCOUNT_END })