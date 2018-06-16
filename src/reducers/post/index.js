import { SET_POST } from "../actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return action.post;
    default:
      return state;
  }
};
