import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Post from './Post';

class ListPosts extends Component {

    render() {
        const { allPosts } = this.props;

        return (
            <div className="ListPosts">
                <ol className="post-list px-5 py-2">
                {allPosts.map(post => (
                    <li key={post.id}>
                        <Post 
                            post={post}
                        />
                    </li>
                ))}
                </ol>
            </div>
        );
    }
}

const mapStateToProps = ({allPosts}) => ({
    allPosts,
})

export default connect(mapStateToProps)(ListPosts);
