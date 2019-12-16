/* eslint-disable import/prefer-default-export */
import { qrAction } from 'constants/actions';
import { get } from 'utils/request';

export const checkQRDispatch = (barcodeResult, eventId, userId) => ({
  type: qrAction.CHECK_QR,
  promise: get('http://www.mocky.io/v2/5df1c4cc31000085008f1067',
    {
      barcodeResult,
      eventId,
      userId,
    }, false),
});
