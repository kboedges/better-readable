import { EDIT_POST_SUCCESS } from "../actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_POST_SUCCESS:
      return action.updatedPost;
    default:
      return state;
  }
};
