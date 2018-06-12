import { VOTE_POST_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case VOTE_POST_SUCCESS:
      return action.votePost;
    default:
      return state;
  }
};
