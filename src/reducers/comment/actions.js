const headers = {
    'Accept': 'application/json',
    'Authorization': 'meow'
  }
  
  export const SET_COMMENT = 'SET_COMMENT';
  
  export function getComment() {
      return dispatch =>
          fetch("http://localhost:3001/comments/894tuq4ut84ut8v4t8wun89g", { headers })
              .then(res => res.json())
              .catch(error => console.error('Error:', error))
              .then(comment =>
                  dispatch(setComment(comment))
              );
  }
  
  export function setComment(comment) {
      return {
          type: SET_COMMENT,
          comment
      }
  }