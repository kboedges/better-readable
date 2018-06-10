import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Fetchers on load
import { getAllPosts } from './reducers/posts/actions';
import { getCategoryPosts } from './reducers/category-posts/actions';
import { getCategories } from './reducers/categories/actions';
import { getComment } from './reducers/comment/actions';

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Fetching everything on load
store.dispatch(getAllPosts());
store.dispatch(getCategoryPosts());
store.dispatch(getCategories());
store.dispatch(getComment());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
