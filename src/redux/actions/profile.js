export const GET_PROFILE = 'GET_PROFILE'
export const SET_PROFILE = 'SET_PROFILE'
export const UPDATE_PHOTO_URL = 'UPDATE_PHOTO_URL'

export const getProfile = ()=>({type:GET_PROFILE})
export const setProfile = (user)=>({type:SET_PROFILE,payload:user})
export const updatePhotoUrl = (url)=>({type:UPDATE_PHOTO_URL,payload:url})