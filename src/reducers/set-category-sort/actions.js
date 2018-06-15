export const SET_CATEGORY_SORT = "SET_CATEGORY_SORT";

export function setCategorySort(selectedCategory) {
  return {
    type: SET_CATEGORY_SORT,
    selectedCategory
  };
}
