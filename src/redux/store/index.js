import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginRuceders from "../reducers/loginRucerds";
import profileInfoReducers from "../reducers/profileInfoReducers";
import beachReducers from "../reducers/beachReducers";
import adminReducers from "../reducers/adminReducers";

const bigReducer = combineReducers({
  login: loginRuceders,
  profile: profileInfoReducers,
  beach: beachReducers,
  admin: adminReducers,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
