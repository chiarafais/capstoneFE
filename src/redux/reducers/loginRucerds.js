import { DO_LOGIN } from "../actions";

const initialState = {
  results: "",
};

const loginRuceders = (state = initialState, action) => {
  switch (action.type) {
    case DO_LOGIN:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default loginRuceders;
