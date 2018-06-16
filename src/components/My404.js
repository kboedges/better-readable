import React, { Component } from "react";
import { Link } from "react-router-dom";

class My404 extends Component {
  render() {
    return (
      <div className="text-center m-3">
        <h1>404: Sorry, there's nothing here...</h1>
        <Link to="/">Go back home</Link>
      </div>
    );
  }
}

export default My404;
