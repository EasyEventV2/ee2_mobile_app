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
  promise: post(`${localConfig.apiUrlDuyTan}/auth/login`, {
    username,
    password,
  }),
});

export const loadAccessToken = () => ({
  type: authAction.LOAD_ACCESSTOKEN,
  promise: Auth.updateAccessToken(),
});

export const loadUserId = () => ({
  type: authAction.LOAD_USERID,
  promise: Auth.updateUserId(),
});

export const logoutDispatch = () => ({
  type: authAction.ON_LOGOUT,
});
