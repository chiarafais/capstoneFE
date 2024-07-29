import { GET_USER_INFO, GET_USER_RESERVATION } from "../actions";

const initialState = {
  results: "",
  reservations: [],
};

const profileInfoReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        results: action.payload,
      };
    case GET_USER_RESERVATION:
      return {
        ...state,
        reservations: action.payload,
      };
    default:
      return state;
  }
};

export default profileInfoReducers;
