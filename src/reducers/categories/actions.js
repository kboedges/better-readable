import { SET_CATEGORIES } from "../actionTypes";

const headers = {
  Accept: "application/json",
  Authorization: "flower"
};

export function getCategories() {
  return dispatch =>
    fetch("http://localhost:3001/categories", { headers })
      .then(res => res.json())
      .then(res => res.categories)
      .catch(error => console.error("Error:", error))
      .then(categories => dispatch(setCategories(categories)));
}

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    categories
  };
}
