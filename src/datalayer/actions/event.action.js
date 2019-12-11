import { eventAction, authAction } from 'constants/actions';
import { get } from 'utils/request';

export const changeToLoginComponent = () => ({
  type: authAction.IS_LOGIN_COMPONENT,
});

export const loadEventsListDispatch = (uid, page) => ({
  type: eventAction.LOAD_EVENTS_LIST,
  promise: get(`/users/${uid}/events?p=${page}`, {}, true),
});

export const loadEventDetailDispatch = (eventId) => ({
  type: eventAction.LOAD_EVENT_DETAIL,
  promise: get(`/events/${eventId}`, {}, false),
});
