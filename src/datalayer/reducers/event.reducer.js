import { eventAction } from 'constants/actions';

// This state is for changing Login and Signup components in Authentication screen
// + checking if user has logged in yet?
export const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case eventAction.LOAD_EVENTS_LIST_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
      };
    }

    default:
      return state;
  }
};