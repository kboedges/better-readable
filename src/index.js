import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Fetchers on load
import { getAllPosts } from './reducers/posts/actions';
import { getCategoryPosts } from './reducers/category-posts/actions';
import { getCategories } from './reducers/categories/actions';
import { getPost } from './reducers/post/actions';
import { getPostComments } from './reducers/post-comments/actions';
import { getComment } from './reducers/comment/actions';

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Fetching everything on load
store.dispatch(getAllPosts());
store.dispatch(getCategoryPosts());
store.dispatch(getCategories());
// store.dispatch(getPost());
store.dispatch(getPostComments());
store.dispatch(getComment());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
