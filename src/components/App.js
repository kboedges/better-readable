import React, { Component } from 'react';
import Nav from './Nav'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav/>
        Meow
      </div>
    );
  }
}

export default App;

// If a selectedCategory exists, display categoryPosts instead of allPosts.
// In the toolbar at the top, there will be an AddPost comp, CategorySelect, and SortPosts comp
// Each tool comp will adjust the state in the store 
// Based on the info in the store, ListPosts will display different information
// The comps will work separately as much as possible
