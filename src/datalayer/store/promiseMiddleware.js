import Auth from 'utils/auth';

export default ({ dispatch, getState }) => (next) => (action) => {
  // If there's no promise, call next step
  if (!action.promise) {
    return next(action);
  }

  // If there's a promise
  const {
    promise, type, ...rest
  } = action;

  const beginAction = type;
  const successAction = `${type}_SUCCESS`;
  // const failureAction = `${type}_FAILURE`;

  // Pass beginAction to the next step, except promise
  next({ type: beginAction, ...rest });

  let p = promise;
  // If promise is nested in a function
  if (typeof promise === 'function') {
    p = promise(dispatch, getState);
  }

  return p.then((result) => {
    // Dispatch successAction
    // If we are dispatching Login
    if (successAction === 'ON_LOGIN_SUCCESS') {
      Auth.setAuth(result.data.token, result.data.userId)
        .then(() => {
          next({
            type: successAction,
            payload: result,
            extraPayload: rest.payload,
          });
        });
    } else {
      next({
        type: successAction,
        payload: result,
        extraPayload: rest.payload,
      });
    }

    const response = { success: true, result };
    return response;
  }).catch((error) => {
    const response = { success: false, error };
    return response;
  });
};
