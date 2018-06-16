import { SET_COMMENT } from "../actionTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENT:
      return action.comment;
    default:
      return state;
  }
};
