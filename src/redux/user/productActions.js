import { ActionTypes } from "./action-types";

//always returns an object

export const setUser = (products) => {
  return {
    type: ActionTypes.SET_USER, //type of action
    payload: products, //products that we are passing in
  };
};
export const removeUser = (products) => {
  return {
    type: ActionTypes.REMOVE_USER, //type of action
    payload: products, //products that we are passing in
  };
};
export const setUserFailed = (products) => {
  return {
    type: ActionTypes.SET_USER_FAILED, //type of action
    payload: products, //products that we are passing in
  };
};
