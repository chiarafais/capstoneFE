import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginRuceders from "../reducers/loginRucerds";
import profileInfoReducers from "../reducers/profileInfoReducers";

const bigReducer = combineReducers({
  login: loginRuceders,
  profile: profileInfoReducers,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
