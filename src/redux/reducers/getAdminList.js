import { GET_ADMIN_LIST_ERROR, GET_ADMIN_LIST_START, GET_ADMIN_LIST_SUCCESS } from "../actions/getAdminList";

export const getAdminList = (
    state = { getAdminListSuccess: false, getAdminList: "", adminList: [] },
    action
) => {
    if (action.type === GET_ADMIN_LIST_SUCCESS)
        return { ...state, adminList: action.payloads.data, error: "" };
    if (action.type === GET_ADMIN_LIST_ERROR)
        return { ...state, getAdminListSuccess: false, error: action.payloads.error };
    if (action.type === GET_ADMIN_LIST_START) return state;
    return state;
};
