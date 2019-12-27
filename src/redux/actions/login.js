/* login */
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const startLogin = (login, password) => ({ type: LOGIN_START, payload: { username: login, password } })
export const errorLogin = (error) => ({ type: LOGIN_ERROR, payloads: { error } })
export const successLogin = (token,username,role) => ({ type: LOGIN_SUCCESS ,payload: {token,username,role}})

/* login */