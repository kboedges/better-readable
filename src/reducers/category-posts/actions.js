const headers = {
    'Accept': 'application/json',
    'Authorization': 'flower'
  }
  
  export const SET_CATEGORY_POSTS = 'SET_CATEGORY_POSTS';
  
  export function getCategoryPosts() {
      return dispatch =>
          fetch("http://localhost:3001/react/posts", { headers })
              .then(res => res.json())
              .catch(error => console.error('Error:', error))
              .then(allCategoryPosts =>
                  dispatch(setCategoryPosts(allCategoryPosts))
              );
  }
  
  export function setCategoryPosts(allCategoryPosts) {
      return {
          type: SET_CATEGORY_POSTS,
          allCategoryPosts
      }
  }