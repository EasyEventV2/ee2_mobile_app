import { authAction } from 'constants/actions';
import { post } from 'utils/request';
import Auth from 'utils/auth';
import localConfig from 'configs/local';

export const changeToLoginComponent = () => ({
  type: authAction.IS_LOGIN_COMPONENT,
});

export const changeToSignupComponent = () => ({
  type: authAction.IS_SIGNUP_COMPONENT,
});

export const loginAPI = (username, password) => ({
  type: authAction.ON_LOGIN,
  promise: post(`${localConfig.apiUrlNghiaTan}/users/login`, {
    username,
    password,
  }),
});

export const loadAuth = () => ({
  type: authAction.LOAD_AUTH,
  promise: Auth.updateAccessToken(),
});
