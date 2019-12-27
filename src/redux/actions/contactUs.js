export const CONTACT_US_START = 'CONTACT_US_START'
export const CONTACT_US_END = 'CONTACT_US_END'

export const startContactUs = (contact) => {
 
    return { type: CONTACT_US_START,payload:contact }
}
export const endContactUs = (status) => ({ type: CONTACT_US_END,payload:status})