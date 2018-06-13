export const SET_SORT = "SET_SORT";

export function setSort(sortOption) {
  return {
    type: SET_SORT,
    sortOption
  };
}
