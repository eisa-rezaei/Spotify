import { ActionTypes } from "./action-types";

//always returns an object

export const setMusic = (products) => {
  return {
    type: ActionTypes.SET_MUSIC, //type of action
    payload: products, //products that we are passing in
  };
};
export const removeMusic = (products) => {
  return {
    type: ActionTypes.REMOVE_MUSIC, //type of action
    payload: products, //products that we are passing in
  };
};

export const setCurrentTime = (products) => {
  return {
    type: ActionTypes.SET_CURRENT_TIME, //type of action
    payload: products, //products that we are passing in
  };
};
export const setIsPlaying = (products) => {
  return {
    type: ActionTypes.SET_IS_PLAYING, //type of action
    payload: products, //products that we are passing in
  };
};
export const setIsEnded = (products) => {
  return {
    type: ActionTypes.SET_IS_ENDED, //type of action
    payload: products, //products that we are passing in
  };
};
export const setVolume = (products) => {
  return {
    type: ActionTypes.SET_VOLUME, //type of action
    payload: products, //products that we are passing in
  };
};
