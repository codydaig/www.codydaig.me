import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { browserHistory, Router, Route } from 'react-router';
import Example from './Example.js';
import Blog from './Blog.js';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="example" component={Example} />
        <Route path="blog/:blogID" component={Blog} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
