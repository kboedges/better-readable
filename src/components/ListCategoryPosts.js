import React, { Component } from 'react';
import { connect } from 'react-redux';


// Components
import Post from './Post';
import Toolbar from './Toolbar';

class ListCategoryPosts extends Component {
    //this.props.history.push('/udacity');
    // changeCategoryURL = (category) => {
    //     this.props.history.push(`/${category}`);
    // }

    render() {
        const { allPosts } = this.props;
        const selectedCategory = this.props.match.params.category;

        return (
            <div className="ListCategoryPosts">
                <Toolbar/>
                <ol className="post-list px-5 py-2">
                    {allPosts.filter(post => post.category === selectedCategory).length > 0 ? (
                        allPosts.filter(post => post.category === selectedCategory).map(post => (
                            <li key={post.id}>
                                <Post 
                                    post={post}
                                    postDetail={false}
                                />
                            </li>
                        ))
                    ) : (
                        <p>Oops, nothing here...</p>
                    )} 
                </ol>
            </div>
        );
    }
}

const mapStateToProps = ({allPosts}) => ({
    allPosts,
})

export default connect(mapStateToProps)(ListCategoryPosts);
