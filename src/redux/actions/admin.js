export const GET_USERS_LIST_START = 'GET_USERS_LIST_START'
export const GET_USERS_LIST_END = 'GET_USERS_LIST_END'

const GET_MESSAGES_START = 'GET_MESSAGES_START'
const GET_MESSAGES_END = 'GET_MESSAGES_END'

export const ACTIVATE_USER = 'ACTIVATE_USER'
export const ACTIVATED_USER = 'ACTIVATED_USER'

const GET_FINANCIAL_INFOS_START = 'GET_FINANCIALS_INFOS_START'
const GET_FINANCIAL_INFOS_END = 'GET_FINANCIALS_INFOS_END'

const GET_INTERVENTIONS_START = 'GET_INTERVENTIONS_START'
const GET_INTERVENTIONS_END = 'GET_INTERVENTIONS_END'

const GET_ERP_INFOS_START = 'GET_ERP_INFOS_START'
const GET_ERP_INFOS_END = 'GET_ERP_INFOS_END'

export const DELETE_USER = 'DELETE_USER'
export const USER_DELETED = 'USER_DELETED'

export const CHANGE_ACCOUNT_TYPE = 'CHANGE_ACCOUNT_TYPE'
export const ACCOUNT_TYPE_CHANGED = 'ACCOUNT_TYPE_CHANGED'

export const changeAccountType = (role,id,email)=>({type:CHANGE_ACCOUNT_TYPE,payload:{role,id,email}})
export const accountTypeChanged = (status,role,id)=>({type:ACCOUNT_TYPE_CHANGED,payload:{status,role,id}})

export const getUsersListStart = (role) => ({ type: GET_USERS_LIST_START,payload:role })
export const getUsersListEnd = (data,role) => ({ type: GET_USERS_LIST_END, payload: {data,role} })

export const getMessageStart = () => ({ type: GET_MESSAGES_START })
export const getMessageEnd = (data) => ({ type: GET_MESSAGES_END, payloads: data })

export const activateUser = (email,id,status) => ({ type: ACTIVATE_USER,payload:{email,id,status} })
export const activatedUser = (id,status) => ({ type: ACTIVATED_USER,payload:{id,status}})

export const deleteUser = (email)=>({type:DELETE_USER,payload:email})
export const userDeleted = (status)=>({type:USER_DELETED,payload:status})

export const getFinancialInfosStart = () => ({ type: GET_FINANCIAL_INFOS_START })
export const getFinancialInfosEnd = (data) => ({ type: GET_FINANCIAL_INFOS_END, payloads: data })

export const getInterventionsStart = () => ({ type: GET_INTERVENTIONS_START })
export const getInterventionsEnd = (data) => ({ type: GET_INTERVENTIONS_END, payloads: data })

export const getErpInfosStart = () => ({ type: GET_ERP_INFOS_START })
export const getErpInfosEnd = (data) => ({ type: GET_ERP_INFOS_END, payloads: data })

