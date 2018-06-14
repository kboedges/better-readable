const headers = {
  Accept: "application/json",
  Authorization: "flower",
  "Content-Type": "application/json"
};

export const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";

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
