const headers = {
  Accept: "application/json",
  Authorization: "flower",
  "Content-Type": "application/json"
};

export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";

export function editPost(updatedPost, postId) {
  console.log("In:", updatedPost);
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
