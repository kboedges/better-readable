import { SET_POST_COMMENTS } from "../actionTypes";

const headers = {
  Accept: "application/json",
  Authorization: "flower"
};

export function getPostComments(id) {
  return dispatch =>
    fetch(`http://localhost:3001/posts/${id}/comments`, { headers })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(comments => dispatch(setPostComments(comments)));
}

export function setPostComments(comments) {
  return {
    type: SET_POST_COMMENTS,
    comments
  };
}
