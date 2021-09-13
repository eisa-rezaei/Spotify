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
export const setDuration = (products) => {
  return {
    type: ActionTypes.SET_DURATION, //type of action
    payload: products, //products that we are passing in
  };
};
export const setIsPlaying = (products) => {
  return {
    type: ActionTypes.SET_IS_PLAYING, //type of action
    payload: products, //products that we are passing in
  };
};
