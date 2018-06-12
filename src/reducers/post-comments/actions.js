const headers = {
  Accept: "application/json",
  Authorization: "flower"
};

export const SET_POST_COMMENTS = "SET_POST_COMMENTS";

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
