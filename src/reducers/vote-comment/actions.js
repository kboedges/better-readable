const headers = {
  Accept: "application/json",
  Authorization: "flower",
  "Content-Type": "application/json"
};

export const VOTE_COMMENT_SUCCESS = "VOTE_COMMENT_SUCCESS";

export function voteComment(commentId, option) {
  return dispatch =>
    fetch(`http://localhost:3001/comments/${commentId}`, {
      headers,
      method: "POST",
      body: JSON.stringify({ option })
    })
      .then(res => res.json())
      .then(voteComment => dispatch(voteCommentSuccess(voteComment)));
}

export function voteCommentSuccess(voteComment) {
  return {
    type: VOTE_COMMENT_SUCCESS,
    voteComment
  };
}
