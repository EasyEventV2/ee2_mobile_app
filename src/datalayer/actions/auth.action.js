import { authAction } from 'constants/actions';

export const changeToLoginComponent = () => ({
  type: authAction.IS_LOGIN_COMPONENT,
});

export const changeToSignupComponent = () => ({
  type: authAction.IS_SIGNUP_COMPONENT,
});
