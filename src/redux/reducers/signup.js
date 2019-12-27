import { SIGNUP_SUCCESS, SIGNUP_START, SIGNUP_ERROR } from "../actions/signup";

export const signUp = (state = { signUpSuccess: false, signUpError: "" }, action) => {
  if (action.type === SIGNUP_SUCCESS) return { signUpSuccess: true, signUpError: "" };
  if (action.type === SIGNUP_ERROR)
    return { signUpSuccess: false, signUpError: action.payload.error };
  if (action.type === SIGNUP_START) return state;
  return state;
};
