import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

// Components
import Nav from './Nav';
import ListPosts from './ListPosts';
import Toolbar from './Toolbar';
import PostDetail from './PostDetail';
import AddPost from './AddPost';
import ListCategoryPosts from './ListCategoryPosts';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav/>
        
        <Switch>
          <Route exact path='/' render={() => (
            <div>
              <Toolbar/>
              <ListPosts/>
            </div>
          )}/>
          <Route exact path='/add-post' component={AddPost}/>
          <Route exact path="/:category" component={ListCategoryPosts}/>
          <Route exact path="/:category/:post_id" component={PostDetail}/>
        </Switch>
        
        {/* <PostDetail/> */}
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
