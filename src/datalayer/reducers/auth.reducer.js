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

    case authAction.ON_LOGIN_SUCCESS: {
      const { token, userId } = action.payload.data;
      Auth.setAuth(token, userId);
      return {
        ...state,
        loggedIn: true,
      };
    }

    default:
      return state;
  }
};
