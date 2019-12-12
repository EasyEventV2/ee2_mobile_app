import { qrAction } from 'constants/actions';

// This state is for getting check-in QR result
export const INITIAL_STATE = {
  checkedInResult: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case qrAction.CHECK_QR_SUCCESS: {
      return {
        ...state,
        list: action.payload.data,
      };
    }

    default:
      return state;
  }
};
