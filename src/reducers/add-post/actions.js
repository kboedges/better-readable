const headers = {
  Accept: "application/json",
  Authorization: "flower",
  "Content-Type": "application/json"
};

export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";

export function addPost(newPost) {
  return dispatch =>
    fetch("http://localhost:3001/posts/", {
      headers,
      method: "POST",
      body: JSON.stringify(newPost)
    })
      .then(res => res.json())
      .then(newPost => dispatch(addPostSuccess(newPost)));
}

export function addPostSuccess(newPost) {
  return {
    type: ADD_POST_SUCCESS,
    newPost
  };
}
