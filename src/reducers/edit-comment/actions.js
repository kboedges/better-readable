import { EDIT_COMMENT_SUCCESS } from "../actionTypes";

const headers = {
  Accept: "application/json",
  Authorization: "flower",
  "Content-Type": "application/json"
};

export function editComment(updatedComment, commentId) {
  return dispatch =>
    fetch(`http://localhost:3001/comments/${commentId}`, {
      headers,
      method: "PUT",
      body: JSON.stringify({ updatedComment })
    })
      .then(res => res.json())
      .catch(error => console.log(error))
      .then(updatedComment => dispatch(editCommentSuccess(updatedComment)));
}

export function editCommentSuccess(updatedComment) {
  return {
    type: EDIT_COMMENT_SUCCESS,
    updatedComment
  };
}
