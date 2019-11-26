import { eventAction, authAction } from 'constants/actions';
import { get } from 'utils/request';
import localConfig from 'configs/local';

export const changeToLoginComponent = () => ({
  type: authAction.IS_LOGIN_COMPONENT,
});

export const loadEventsListAPI = (uid) => ({
  type: eventAction.LOAD_EVENTS_LIST,
  promise: get(`${localConfig.apiUrlDuyTan}/users/${uid}/events`, {}, true),
});
