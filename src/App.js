import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to my Blog!</h1>
        <h3>Cody B. Daig</h3>
        {this.props.children}
      </div>
    );
  }
}

export default App;
