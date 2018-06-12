import { ADD_COMMENT_SUCCESS } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT_SUCCESS:
      return action.newComment;
    default:
      return state;
  }
};
