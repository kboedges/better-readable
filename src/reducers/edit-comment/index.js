import { EDIT_COMMENT_SUCCESS } from "../actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_COMMENT_SUCCESS:
      return action.updatedComment;
    default:
      return state;
  }
};
