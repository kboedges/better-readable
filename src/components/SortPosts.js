import React, { Component } from "react";

class SortPosts extends Component {
  render() {
    return (
      <div className="SortPosts">
        <select name="" id="">
          <option value="">Sort Posts</option>
          <option value="">Most recent</option>
          <option value="">Highest score</option>
        </select>
      </div>
    );
  }
}

export default SortPosts;

/* 
Pull in allPosts and categoryPosts
onChange, take in the value and based on the value, sort by timestamp or voteScore

onChange = (option, postList) => {
  postList.sort(function(a,b){
    return a.option-b.option
  }
}

*/

// http://www.javascriptkit.com/javatutors/arraysort2.shtml
//   employees.sort(function(a, b){
//     return a.age-b.age
// })
