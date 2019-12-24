import { combineReducers } from 'redux';
import app from './app.reducer';
import auth from './auth.reducer';
import event from './event.reducer';
import qr from './qr.reducer';
import guest from './guest.reducer';
// Import more reducers here

export default combineReducers({
  app,
  auth,
  event,
  qr,
  guest,
  // Add more reducers here
});
