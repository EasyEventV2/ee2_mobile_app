import { authAction } from 'constants/actions';

export const INITIAL_STATE = {
  isLoginComponent: true,
};

export default (state = INITIAL_STATE, action) => {
  console.log(state.isLoginComponent);
  switch (action.type) {
    case authAction.IS_LOGIN_COMPONENT: {
      return {
        ...state,
        isLoginComponent: true,
      };
    }

    case authAction.IS_SIGNUP_COMPONENT: {
      return {
        ...state,
        isLoginComponent: false,
      };
    }

    default:
      return state;
  }
};
