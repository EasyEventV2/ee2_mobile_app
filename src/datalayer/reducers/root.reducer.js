import { combineReducers } from 'redux';
import app from './app.reducer';
import auth from './auth.reducer';
import event from './event.reducer';
// Import more reducers here

export default combineReducers({
  app,
  auth,
  event,
  // Add more reducers here
});
