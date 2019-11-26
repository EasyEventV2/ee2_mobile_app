import { eventAction, authAction } from 'constants/actions';
import { get } from 'utils/request';
import Auth from 'utils/auth';
import localConfig from 'configs/local';

export const changeToLoginComponent = () => ({
  type: authAction.IS_LOGIN_COMPONENT,
});

export const loadEventsListAPI = () => ({
  type: eventAction.LOAD_EVENTS_LIST,
  promise: get(`${localConfig.apiUrlDuyTan}/users/${Auth.getUserId()}/events`, {}, true),
});
