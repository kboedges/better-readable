const headers = {
    'Accept': 'application/json',
    'Authorization': 'penis'
  }
  
  export const SET_POST = 'SET_POST';
  
  export function getPost() {
      return dispatch =>
          fetch("http://localhost:3001/posts/8xf0y6ziyjabvozdd253nd", { headers })
              .then(res => res.json())
              .catch(error => console.error('Error:', error))
              .then(post =>
                  dispatch(setPost(post))
              );
  }
  
  export function setPost(post) {
      return {
          type: SET_POST,
          post
      }
  }