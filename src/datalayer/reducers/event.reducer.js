import { eventAction } from 'constants/actions';

// This state is for getting events eventList from database + event details
export const INITIAL_STATE = {
  eventList: [],
  eventDetail: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case eventAction.LOAD_EVENTS_eventList_SUCCESS: {
      return {
        ...state,
        eventList: action.payload.data,
      };
    }

    case eventAction.LOAD_EVENT_DETAIL: {
      return {
        ...state,
        eventDetail: {},
      };
    }

    case eventAction.LOAD_EVENT_DETAIL_SUCCESS: {
      return {
        ...state,
        eventDetail: action.payload.data,
      };
    }

    default:
      return state;
  }
};
