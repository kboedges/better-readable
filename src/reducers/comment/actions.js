const headers = {
  Accept: "application/json",
  Authorization: "flower"
};

export const SET_COMMENT = "SET_COMMENT";

export function getComment(commentId) {
  return dispatch =>
    fetch(`http://localhost:3001/comments/${commentId}`, {
      headers
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(comment => dispatch(setComment(comment)));
}

export function setComment(comment) {
  return {
    type: SET_COMMENT,
    comment
  };
}
