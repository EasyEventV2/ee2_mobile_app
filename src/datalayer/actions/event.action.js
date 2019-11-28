import { eventAction, authAction } from 'constants/actions';
import { get } from 'utils/request';
import localConfig from 'configs/local';

export const changeToLoginComponent = () => ({
  type: authAction.IS_LOGIN_COMPONENT,
});

export const loadEventsListDispatch = (uid) => ({
  type: eventAction.LOAD_EVENTS_LIST,
  promise: get(`${localConfig.apiUrl}/users/${uid}/events`, {}, true),
});
