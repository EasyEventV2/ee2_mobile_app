/* eslint-disable import/prefer-default-export */
import { qrAction } from 'constants/actions';
import { put } from 'utils/request';

export const checkQRDispatch = (barcodeResult, eventId, guestId, ticketCode) => ({
  type: qrAction.CHECK_QR,
  promise: put(`/events/${eventId}/guests/${guestId}`,
    {
      action: 'checkin',
      ticketCode,
    }, true),
});
