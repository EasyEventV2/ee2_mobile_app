import { authAction } from 'constants/actions';
import { post } from 'utils/request';
import Auth from 'utils/auth';
import localConfig from 'configs/local';

export const changeToLoginComponentDispatch = () => ({
  type: authAction.IS_LOGIN_COMPONENT,
});

export const changeToSignupComponentDispatch = () => ({
  type: authAction.IS_SIGNUP_COMPONENT,
});

export const loginDispatch = (username, password) => ({
  type: authAction.ON_LOGIN,
  promise: post(`${localConfig.apiUrl}/auth/login`, {
    username,
    password,
  }),
});

export const loadAuthDispatch = () => ({
  type: authAction.LOAD_AUTH,
  promise: Auth.updateAuth(),
});

export const logoutDispatch = () => ({
  type: authAction.ON_LOGOUT,
});
