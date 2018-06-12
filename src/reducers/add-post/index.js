import { ADD_POST_SUCCESS } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_SUCCESS:
      return action.newPost;
    default:
      return state;
  }
};
