
/* Get admin account List */
export const GET_ADMIN_LIST_START = 'GET_ADMIN_LIST_START'
export const GET_ADMIN_LIST_SUCCESS = 'GET_ADMIN_LIST_SUCCESS'
export const GET_ADMIN_LIST_ERROR = 'GET_ADMIN_LIST_ERROR'
export const getAdminListStart = () => ({ type: GET_ADMIN_LIST_START })
export const getAdminListSuccess = data => ({ type: GET_ADMIN_LIST_SUCCESS, payloads: data })
export const getAdminListError = error => ({ type: GET_ADMIN_LIST_ERROR, payloads: { error } })
/* End Get admin account */