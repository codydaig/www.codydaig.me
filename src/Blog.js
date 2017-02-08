import React, { Component } from 'react';
// import { Link } from 'react-router';

class Blog extends Component {
  render() {
    return (
      <h1>{this.props.params.blogID}</h1>
    );
  }
}

export default Blog;
