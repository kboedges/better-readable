import { EDIT_POST_SUCCESS } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_POST_SUCCESS:
      return action.updatedPost;
    default:
      return state;
  }
};
