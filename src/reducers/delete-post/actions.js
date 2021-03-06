import { DELETE_POST_SUCCESS } from "../actionTypes";

const headers = {
  Accept: "application/json",
  Authorization: "flower",
  "Content-Type": "application/json"
};

export function deletePost(postId, option) {
  return dispatch =>
    fetch(`http://localhost:3001/posts/${postId}`, {
      headers,
      method: "DELETE"
    })
      .then(res => res.json())
      .then(deletedPost => dispatch(deletePostSuccess(deletedPost)));
}

export function deletePostSuccess(deletedPost) {
  return {
    type: DELETE_POST_SUCCESS,
    deletedPost
  };
}
