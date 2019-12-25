/* eslint-disable import/prefer-default-export */
import { guestAction } from 'constants/actions';
import { get, post } from 'utils/request';

export const loadGuestsListDispatch = () => ({
  type: guestAction.LOAD_GUESTS_LIST,
  promise: get('http://www.mocky.io/v2/5e0284fd2f00007696dcd644', {}, true),
});

export const acceptTicketDispatch = (guestId) => ({
  type: guestAction.ACCEPT_TICKET,
  promise: post('http://www.mocky.io/v2/5e02f12731000008156b2a4f', {
    guestId,
  }, true),
});
