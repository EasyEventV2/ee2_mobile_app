/* eslint-disable import/prefer-default-export */
import { guestAction } from 'constants/actions';
import { get, put } from 'utils/request';

export const loadUnacceptedGuestsListDispatch = () => ({
  type: guestAction.LOAD_UNACCEPTED_GUESTS_LIST,
  promise: get('http://www.mocky.io/v2/5e0284fd2f00007696dcd644', {}, true),
});

export const loadAcceptedGuestsListDispatch = () => ({
  type: guestAction.LOAD_ACCEPTED_GUESTS_LIST,
  promise: get('http://www.mocky.io/v2/5e0284fd2f00007696dcd644', {}, true),
});

export const loadCheckedInGuestsListDispatch = () => ({
  type: guestAction.LOAD_CHECKEDIN_GUESTS_LIST,
  promise: get('http://www.mocky.io/v2/5e0284fd2f00007696dcd644', {}, true),
});

export const acceptTicketDispatch = (eventId, guestId) => ({
  type: guestAction.ACCEPT_TICKET,
  promise: put(`/events/${eventId}/guests/${guestId}`, {
    action: 'approve',
  }, true),
});
