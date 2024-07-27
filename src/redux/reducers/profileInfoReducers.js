import { GET_USER_INFO } from "../actions";

const initialState = {
  results: "",
};

const profileInfoReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default profileInfoReducers;
