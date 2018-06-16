import { SET_SORT } from "../actionTypes";

const initialState = "byDate";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT:
      return action.sortOption;
    default:
      return state;
  }
};
