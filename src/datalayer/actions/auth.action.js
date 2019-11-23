import { authAction } from 'constants/actions';
import { post } from 'utils/request';

export const changeToLoginComponent = () => ({
  type: authAction.IS_LOGIN_COMPONENT,
});

export const changeToSignupComponent = () => ({
  type: authAction.IS_SIGNUP_COMPONENT,
});

export const loginAPI = (username, password) => ({
  type: authAction.ON_LOGIN,
  promise: post('http://192.168.1.6:3003/users/login', {
    username,
    password,
  }),
});
