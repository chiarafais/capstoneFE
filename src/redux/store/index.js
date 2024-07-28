import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginRuceders from "../reducers/loginRucerds";
import profileInfoReducers from "../reducers/profileInfoReducers";
import beachReducers from "../reducers/beachReducers";

const bigReducer = combineReducers({
  login: loginRuceders,
  profile: profileInfoReducers,
  beach: beachReducers,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
