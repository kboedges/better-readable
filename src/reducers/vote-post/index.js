import { VOTE_POST_SUCCESS } from "../actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case VOTE_POST_SUCCESS:
      return action.votePost;
    default:
      return state;
  }
};
