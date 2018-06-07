import React, { Component } from 'react';

// Components
import Post from './Post'

class ListPosts extends Component {

    render() {
        return (
            <div className="ListPosts">
                <ol className="post-list px-5 py-2">
                    <li><Post/></li>
                    <li><Post/></li>
                </ol>
            </div>
        );
    }
}

export default ListPosts;
