import { authAction } from 'constants/actions';
import Auth from 'utils/auth';

// This state is for changing Login and Signup components in Authentication screen
// + checking if user has logged in yet?
export const INITIAL_STATE = {
  currentComponent: 'Login',
  loggedIn: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authAction.LOAD_AUTH: {
      return {
        ...state,
        loggedIn: null,
      };
    }

    case authAction.LOAD_AUTH_SUCCESS: {
      return {
        ...state,
        loggedIn: Auth.isAuth(),
      };
    }

    case authAction.IS_LOGIN_COMPONENT: {
      return {
        ...state,
        currentComponent: 'Login',
      };
    }

    case authAction.IS_SIGNUP_COMPONENT: {
      return {
        ...state,
        currentComponent: 'Signup',
      };
    }

    case authAction.ON_SIGNUP_SUCCESS:
    case authAction.ON_LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
      };
    }

    case authAction.ON_LOGOUT: {
      Auth.deleteAuth();
      return {
        ...state,
        loggedIn: false,
      };
    }

    default:
      return state;
  }
};
