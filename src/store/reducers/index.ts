import { combineReducers } from "redux";
import { IAppState } from "../constants";
import profile from "./profile";

const allReducers = combineReducers<IAppState>({
  profile
});

export default allReducers;
