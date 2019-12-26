import { guestAction } from 'constants/actions';

// This state is for getting guests list
export const INITIAL_STATE = {
  unacceptedGuestsList: [],
  unacceptedPagination: {},
  acceptedGuestsList: [],
  acceptedPagination: {},
  checkedInGuestsList: [],
  checkedInPagination: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case guestAction.LOAD_UNACCEPTED_GUESTS_LIST: {
      return {
        ...state,
        unacceptedGuestsList: [],
        unacceptedPagination: {},
      };
    }

    case guestAction.LOAD_UNACCEPTED_GUESTS_LIST_SUCCESS: {
      return {
        ...state,
        unacceptedGuestsList: action.payload.data.listItems,
        unacceptedPagination: {
          totalPages: action.payload.data.totalPages,
          currentPage: action.payload.data.currentPage,
        },
      };
    }

    case guestAction.LOAD_ACCEPTED_GUESTS_LIST: {
      return {
        ...state,
        acceptedGuestsList: [],
        acceptedPagination: {},
      };
    }

    case guestAction.LOAD_ACCEPTED_GUESTS_LIST_SUCCESS: {
      return {
        ...state,
        acceptedGuestsList: action.payload.data.listItems,
        acceptedPagination: {
          totalPages: action.payload.data.totalPages,
          currentPage: action.payload.data.currentPage,
        },
      };
    }

    case guestAction.LOAD_CHECKEDIN_GUESTS_LIST: {
      return {
        ...state,
        checkedInGuestsList: [],
        checkedInPagination: {},
      };
    }

    case guestAction.LOAD_CHECKEDIN_GUESTS_LIST_SUCCESS: {
      return {
        ...state,
        checkedInGuestsList: action.payload.data.listItems,
        checkedInPagination: {
          totalPages: action.payload.data.totalPages,
          currentPage: action.payload.data.currentPage,
        },
      };
    }

    case guestAction.ACCEPT_TICKET_SUCCESS: {
      return state;
    }

    default:
      return state;
  }
};
