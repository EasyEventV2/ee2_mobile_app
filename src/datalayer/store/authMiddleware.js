import { authAction } from 'constants/actions';
import Auth from 'utils/auth';

const authMiddleware = () => next => (action) => {
  if (action.type === authAction.ON_LOGIN_SUCCESS || authAction.ON_SIGNUP_SUCCESS) {
    if (
      action.payload && action.payload.data
      && action.payload.data.token && action.payload.data.userId
    ) {
      Auth.setAuth(action.payload.data.token, action.payload.data.userId);
    }
  }

  return next(action);
};

export default authMiddleware;
