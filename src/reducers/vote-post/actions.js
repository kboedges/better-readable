const headers = {
  Accept: "application/json",
  Authorization: "flower",
  "Content-Type": "application/json"
};

export const VOTE_POST_SUCCESS = "VOTE_POST_SUCCESS";

export function votePost(postId, option) {
  return dispatch =>
    fetch(`http://localhost:3001/posts/${postId}`, {
      headers,
      method: "POST",
      body: JSON.stringify(option)
    });
  // .then(res => res.json())
  // .then(console.log(res));
  // .then(votePost => dispatch(votePostSuccess(votePost)));
}

export function votePostSuccess(votePost) {
  return {
    type: VOTE_POST_SUCCESS,
    votePost
  };
}
