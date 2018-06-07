import React, { Component } from 'react';

class Nav extends Component {

  render() {
    return (
      <div className="Nav d-flex flex-row justify-content-start align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon align-self" width="32" height="32" viewBox="0 0 100 100">
            <rect x="20" y="20" fill="transparent" stroke="#fff" strokeWidth="5" width="60" height="60"/>
            <circle fill="transparent" stroke="#fff" cx="50" cy="50" r="45" strokeWidth="5"/>
        </svg>
        <h1 className="nav-title">Readable</h1>
      </div>
    );
  }
}

export default Nav;
