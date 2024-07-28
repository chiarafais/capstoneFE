import { GET_ALL_BEACHES } from "../actions";

const initialState = {
  results: [],
};

const beachReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BEACHES:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default beachReducers;
