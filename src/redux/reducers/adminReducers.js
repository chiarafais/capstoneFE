import { ADMIN_GET_ALL_BEACHES, GET_ALL_RESERVATION, GET_ALL_USERS } from "../actions";

const initialState = {
  users: [],
  beaches: [],
  reservations: [],
};

const adminReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_ALL_RESERVATION:
      return {
        ...state,
        reservations: action.payload,
      };
    case ADMIN_GET_ALL_BEACHES:
      return {
        ...state,
        beaches: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducers;
