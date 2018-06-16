import { SET_ALL_POSTS } from "../actionTypes";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_POSTS:
      return action.allPosts.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
    default:
      return state;
  }
};
