import { combineReducers } from "redux";
import { musicReducer } from "./playing/musicReducer";
import { userReducer } from "./user/userReducer";

//combine reducers
const reducers = combineReducers({
  music: musicReducer,
  user: userReducer,
});

export default reducers;
