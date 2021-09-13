import { combineReducers } from "redux";
import { musicReducer } from "./playing/musicReducer";

//combine reducers
const reducers = combineReducers({
  music: musicReducer,
});

export default reducers;
