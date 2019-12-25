import { guestAction } from 'constants/actions';

// This state is for getting guests list
export const INITIAL_STATE = {
  unacceptedGuestsList: [],
  acceptedGuestsList: [],
  checkedInGuestsList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case guestAction.LOAD_GUESTS_LIST_SUCCESS: {
      return {
        ...state,
        unacceptedGuestsList: action.payload.data.unacceptedGuestsList,
        acceptedGuestsList: action.payload.data.acceptedGuestsList,
        checkedInGuestsList: action.payload.data.checkedInGuestsList,
      };
    }

    case guestAction.ACCEPT_TICKET_SUCCESS: {
      return state;
    }

    default:
      return state;
  }
};
