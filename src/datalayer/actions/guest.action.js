/* eslint-disable import/prefer-default-export */
import { guestAction } from 'constants/actions';
import { get, put } from 'utils/request';

export const loadUnacceptedGuestsListDispatch = (eventId, page) => ({
  type: guestAction.LOAD_UNACCEPTED_GUESTS_LIST,
  promise: get(`/events/${eventId}/guests?type=pending&p=${page}`, {}, true),
});

export const loadAcceptedGuestsListDispatch = (eventId, page) => ({
  type: guestAction.LOAD_ACCEPTED_GUESTS_LIST,
  promise: get(`/events/${eventId}/guests?type=approved&p=${page}`, {}, true),
});

export const loadCheckedInGuestsListDispatch = (eventId, page) => ({
  type: guestAction.LOAD_CHECKEDIN_GUESTS_LIST,
  promise: get(`/events/${eventId}/guests?type=checked&p=${page}`, {}, true),
});

export const acceptTicketDispatch = (eventId, guestId) => ({
  type: guestAction.ACCEPT_TICKET,
  promise: put(`/events/${eventId}/guests/${guestId}`, {
    action: 'approve',
  }, true),
});
