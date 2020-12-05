import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    request: 'not set!',
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Welcome one and all!</h2>
          <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="DianaBook" />
        </header>

        <div className="App-Section" style={{ marginTop: '100px' }}>
          <h2 style={{ color: 'white' }}> Is this thing on? </h2>
          <button className="get-btn">
            GET
            <br />
            <code>/</code>
          </button>
          <button className="post-btn">POST</button>
          <button className="put-btn">PUT</button>
          <button className="delete-btn">DELETE</button>
        </div>
      </div>
    );
  }
}

export default App;
