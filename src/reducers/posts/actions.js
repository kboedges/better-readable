import { SET_ALL_POSTS } from "../actionTypes";

const headers = {
  Accept: "application/json",
  Authorization: "flower"
};

export function getAllPosts() {
  return dispatch =>
    fetch("http://localhost:3001/posts", { headers })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(allPosts => dispatch(setAllPosts(allPosts)));
}

export function setAllPosts(allPosts) {
  return {
    type: SET_ALL_POSTS,
    allPosts
  };
}
