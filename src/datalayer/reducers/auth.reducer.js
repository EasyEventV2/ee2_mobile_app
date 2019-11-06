import { authAction } from 'constants/actions';

// This state is for changing Login and Signup components in Authentication screen
export const INITIAL_STATE = {
  currentComponent: 'Login',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};
