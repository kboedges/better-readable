import { SET_POST } from "../actionTypes";

const headers = {
  Accept: "application/json",
  Authorization: "flower"
};

export function getPost(id) {
  return dispatch =>
    fetch(`http://localhost:3001/posts/${id}`, { headers })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(post => dispatch(setPost(post)));
}

export function setPost(post) {
  return {
    type: SET_POST,
    post
  };
}
