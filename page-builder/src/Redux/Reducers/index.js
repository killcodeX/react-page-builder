import { combineReducers } from "redux";
import BuildReducer from "./BuildReducers";

export default combineReducers({
  build: BuildReducer,
});