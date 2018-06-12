import { SET_COMMENT } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENT:
      return action.comment;
    default:
      return state;
  }
};
