import { SET_CATEGORY_SORT } from "../actionTypes";

export function setCategorySort(selectedCategory) {
  return {
    type: SET_CATEGORY_SORT,
    selectedCategory
  };
}
