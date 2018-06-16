import { VOTE_COMMENT_SUCCESS } from "../actionTypes";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case VOTE_COMMENT_SUCCESS:
      return action.voteComment;
    default:
      return state;
  }
};
