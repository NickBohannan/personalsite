import React, { Component } from 'react';
import './App.css';
import { Home, Work, About, Contact } from './index.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: Home
    }
    this.renderHome = this.renderHome.bind(this)
    this.renderWork = this.renderWork.bind(this)
    this.renderAbout = this.renderAbout.bind(this)
    this.renderContact = this.renderContact.bind(this)
    this.githubLink = this.githubLink.bind(this)
  }

  componentDidMount() {
    document.title = "Nick Bohannan's Portfolio Site"
  }

  githubLink() {
    window.open("https://www.github.com/NickBohannan")
  }

  renderHome() {
    this.setState({ display: Home })
  }

  renderWork() {
    this.setState({ display: Work })
  }

  renderAbout() {
    this.setState({ display: About })
  }

  renderContact() {
    this.setState({ display: Contact })
  }

  render() {
    return (
      <div>
        <head>
          <title>Portfolio of Nick Bohannan</title>
        </head>
        <body>
          <div className="App">
            <div className="nav">
              <div id="home" onClick={this.renderHome}>home</div>
              <div id="work" onClick={this.renderWork}>work</div>
              <div id="about" onClick={this.renderAbout}>about</div>
              <div id="contact" onClick={this.renderContact}>contact</div>
            </div>
            <this.state.display />
            <div className="github-link-container">
              <div className="github-link">
                <img src={require("./GitHub_Logo_White.png")} onClick={this.githubLink} alt="alt" />
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
