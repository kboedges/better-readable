import { DELETE_POST_SUCCESS } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POST_SUCCESS:
      return action.deletedPost;
    default:
      return state;
  }
};
