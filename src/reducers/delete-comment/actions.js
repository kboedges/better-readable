import { DELETE_COMMENT_SUCCESS } from "../actionTypes";

const headers = {
  Accept: "application/json",
  Authorization: "flower",
  "Content-Type": "application/json"
};

export function deleteComment(commentId, option) {
  return dispatch =>
    fetch(`http://localhost:3001/comments/${commentId}`, {
      headers,
      method: "DELETE"
    })
      .then(res => res.json())
      .then(deletedComment => dispatch(deleteCommentSuccess(deletedComment)));
}

export function deleteCommentSuccess(deletedComment) {
  return {
    type: DELETE_COMMENT_SUCCESS,
    deletedComment
  };
}
