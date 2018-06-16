import { ADD_POST_SUCCESS } from "../actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_SUCCESS:
      return action.newPost;
    default:
      return state;
  }
};
