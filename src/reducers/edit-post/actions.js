import { EDIT_POST_SUCCESS } from "../actionTypes";

const headers = {
  Accept: "application/json",
  Authorization: "flower",
  "Content-Type": "application/json"
};

export function editPost(updatedPost, postId) {
  return dispatch =>
    fetch(`http://localhost:3001/posts/${postId}`, {
      headers,
      method: "PUT",
      body: JSON.stringify({ updatedPost })
    })
      .then(res => res.json())
      .then(updatedPost => dispatch(editPostSuccess(updatedPost)));
}

export function editPostSuccess(updatedPost) {
  return {
    type: EDIT_POST_SUCCESS,
    updatedPost
  };
}
