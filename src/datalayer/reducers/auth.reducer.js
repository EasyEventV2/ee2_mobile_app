import { authAction } from 'constants/actions';

// This state is for changing Login and Signup components in Authentication screen
export const INITIAL_STATE = {
  currentComponent: 'Login',
  payload: null,
  // payload nay la object 0001
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

    case authAction.ON_LOGIN_SUCCESS: {
      return {
        ...state,
        payload: action.payload,
      };
    }

    default:
      return state;
  }
};
