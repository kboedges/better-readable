import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Nav from "./Nav";
import ListPosts from "./ListPosts";
import PostDetail from "./PostDetail";
import AddPost from "./AddPost";
import ListCategoryPosts from "./ListCategoryPosts";
import EditPost from "./EditPost";
import EditComment from "./EditComment";
import My404 from "./My404";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={ListPosts} />
          <Route exact path="/add-post" component={AddPost} />
          <Route exact path="/404" component={My404} />
          <Route exact path="/:category" component={ListCategoryPosts} />
          <Route exact path="/:category/:post_id" component={PostDetail} />
          <Route exact path="/:category/:post_id/edit-post" component={EditPost} />
          <Route exact path="/comments/:comment_id/edit-comment" component={EditComment} />
        </Switch>
      </div>
    );
  }
}

export default App;
