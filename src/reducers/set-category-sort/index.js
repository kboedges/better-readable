import { SET_CATEGORY_SORT } from "../actionTypes";

const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY_SORT:
      return action.selectedCategory;
    default:
      return state;
  }
};
