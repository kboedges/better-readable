  export const SET_CATEGORY = 'SET_CATEGORY';
  
  export function setCategory(selectedCategory) {
      return {
          type: SET_CATEGORY,
          selectedCategory
      }
  }