const headers = {
  Accept: "application/json",
  Authorization: "flower",
  "Content-Type": "application/json"
};

export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";

export function addComment(newComment) {
  return dispatch =>
    fetch("http://localhost:3001/comments/", {
      headers,
      method: "POST",
      body: JSON.stringify(newComment)
    })
      .then(res => res.json())
      .then(newComment => dispatch(addCommentSuccess(newComment)));
}

export function addCommentSuccess(newComment) {
  return {
    type: ADD_COMMENT_SUCCESS,
    newComment
  };
}
