import { combineReducers } from 'redux';
import app from './app.reducer';
import auth from './auth.reducer';
// Import more reducers here

export default combineReducers({
  app,
  auth,
  // Add more reducers here
});
