import { ActionTypes } from "./action-types";

const musicInitialState = {
  currentMusic: {},
};

export const musicReducer = (state = musicInitialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MUSIC:
      return { ...state, currentMusic: { ...payload } };
    case ActionTypes.REMOVE_MUSIC:
      return {
        ...state,
        currentMusic: state.currentMusic.filter(
          (item) => item.id !== payload.id
        ),
      };
    case ActionTypes.SET_DURATION:
      return {
        ...state,
        currentMusic: { ...state.currentMusic, duration: payload },
      };
    case ActionTypes.SET_CURRENT_TIME:
      return {
        ...state,
        currentMusic: { ...state.currentMusic, currentTime: payload },
      };
    case ActionTypes.SET_IS_PLAYING:
      return {
        ...state,
        currentMusic: { ...state.currentMusic, isPlaying: payload },
      };
    case ActionTypes.SET_IS_ENDED:
      return {
        ...state,
        currentMusic: { ...state.currentMusic, isEnded: payload },
      };
    case ActionTypes.SET_VOLUME:
      return {
        ...state,
        currentMusic: { ...state.currentMusic, volume: payload },
      };
    default:
      return state;
  }
};
