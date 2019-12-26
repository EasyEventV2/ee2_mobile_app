import { guestAction } from 'constants/actions';

// This state is for getting guests list
export const INITIAL_STATE = {
  unacceptedGuestsList: [],
  acceptedGuestsList: [],
  checkedInGuestsList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case guestAction.LOAD_UNACCEPTED_GUESTS_LIST_SUCCESS: {
      return {
        ...state,
        unacceptedGuestsList: action.payload.data.unacceptedGuestsList,
      };
    }

    case guestAction.LOAD_ACCEPTED_GUESTS_LIST_SUCCESS: {
      return {
        ...state,
        acceptedGuestsList: action.payload.data.acceptedGuestsList,
      };
    }

    case guestAction.LOAD_CHECKEDIN_GUESTS_LIST_SUCCESS: {
      return {
        ...state,
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
