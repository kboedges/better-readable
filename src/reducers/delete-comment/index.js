import { DELETE_COMMENT_SUCCESS } from "../actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COMMENT_SUCCESS:
      return action.deletedComment;
    default:
      return state;
  }
};
