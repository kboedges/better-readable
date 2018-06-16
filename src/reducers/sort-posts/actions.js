import { SET_SORT } from "../actionTypes";

export function setSort(sortOption) {
  return {
    type: SET_SORT,
    sortOption
  };
}
