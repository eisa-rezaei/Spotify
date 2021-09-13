import { ActionTypes } from "./action-types";

const musicInitialState = {
  currentMusic: [],
};

export const musicReducer = (state = musicInitialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MUSIC:
      return { ...state, currentMusic: [payload] };
    case ActionTypes.REMOVE_MUSIC:
      return {
        ...state,
        currentMusic: state.currentMusic.filter(
          (item) => item.id !== payload.id
        ),
      };

    default:
      return state;
  }
};
