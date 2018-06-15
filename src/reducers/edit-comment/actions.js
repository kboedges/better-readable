const headers = {
  Accept: "application/json",
  Authorization: "flower",
  "Content-Type": "application/json"
};

export const EDIT_COMMENT_SUCCESS = "EDIT_COMMENT_SUCCESS";

export function editComment(updatedComment, commentId) {
  console.log("In:", updatedComment);
  return dispatch =>
    fetch(`http://localhost:3001/comments/${commentId}`, {
      headers,
      method: "PUT",
      body: JSON.stringify({ updatedComment })
    })
      .then(res => res.json())
      .then(updatedComment => dispatch(editCommentSuccess(updatedComment)));
}

export function editCommentSuccess(updatedComment) {
  return {
    type: EDIT_COMMENT_SUCCESS,
    updatedComment
  };
}
