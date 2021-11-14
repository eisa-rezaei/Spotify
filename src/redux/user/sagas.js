import {takeEvery, call, put} from "redux-saga/effects";
import getUserInfo from "./fetchUser";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* getUser() {
  yield delay(3000);
  const user = yield call(getUserInfo);
  yield put({type: "SET_USER_ASYNC", payload: user});
}

function* watchSaga() {
  yield takeEvery("SET_USER", getUser);
}

export default watchSaga;
