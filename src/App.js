import React, { Component } from 'react';
import './App.css';
import { Home, Work } from './index.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: Home
    }
    this.renderWork = this.renderWork.bind(this)
  }

  renderWork() {
    this.setState({ display: Work })
  }

  render() {
    return (
      <div className="App">
        <div className="nav">
          <div id="home">home</div>
          <div id="work" onClick={this.renderWork}>work</div>
          <div id="about">about</div>
          <div id="contact">contact</div>
        </div>
        <this.state.display />
      </div>
    );
  }
}

export default App;
