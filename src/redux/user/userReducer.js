import { ActionTypes } from "./action-types";

const userInitialState = {
  userInfo: {},
  loading: false,
};

export const userReducer = (state = userInitialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return { ...state, loading: true };
    case ActionTypes.SET_USER_ASYNC:
      return { ...state, userInfo: { ...payload }, loading: false };
    case ActionTypes.REMOVE_USER_ASYNC:
      return {
        ...state,
        userInfo: state.userInfo.filter((item) => item.id !== payload.id),
      };
    case ActionTypes.SET_USER_FAILED_ASYNC:
      return {
        ...state,
        userInfo: { ...state.userInfo, errorMassage: payload },
      };
    default:
      return state;
  }
};
