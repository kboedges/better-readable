import { ADD_COMMENT_SUCCESS } from "../actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT_SUCCESS:
      return action.newComment;
    default:
      return state;
  }
};
