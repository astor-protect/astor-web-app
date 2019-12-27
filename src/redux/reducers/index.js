import {loader} from './loader'
import {logIn} from './logIn'
import {signUp} from './signup'
import {admin} from './admin'
import { getAdminList } from "./getAdminList";
import { resetPassword} from "./resetPassword";
import {contactUs} from './contactUs'
import {profile} from './profile'
import {userType} from './userType'
import {combineReducers} from 'redux'
import {LOGOUT_START} from '../actions/logout'
const appReducer = combineReducers({profile,userType,contactUs,admin, loader, logIn, signUp, getAdminList, resetPassword});
const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === LOGOUT_START) {
      state = undefined;
    }
  
    return appReducer(state, action);
  };
  
  export default rootReducer