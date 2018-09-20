import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Home extends Component {
    render() {
        return (
            <div className="welcometext">my name's nick. i'm a web developer.</div>
        )
    }
}

class Work extends Component {
    constructor(props) {
        super(props)
        this.githubLink = this.githubLink.bind(this)
    }

    githubLink() {
        window.open("https://www.github.com/NickBohannan")
    }

    render() {
        return (
            <div>
                <div className="work-container">
                    <div className="work-element">
                        <div className="title-main">Houndstooth Woodwerk</div>
                        <img src={require('./houndstooth.png')} alt="Houndstooth" />
                        <div className="title">Description</div>
                        <div className="description"></div>
                        <div className="title-ul">Libraries/Frameworks Used</div>
                        <div className="tools">
                            <a>Node.js</a>
                            <a>Express</a>
                            <a>HTML/CSS</a>
                            <a>React</a>
                        </div>
                    </div>
                    <div className="work-element">
                        <div className="title-main">Compendium of Ghara</div>
                        <img src={require('./ghara.png')} alt="Compendium" />
                        <div className="title">Description</div>
                        <div className="description"></div>
                        <div className="title-ul">Libraries/Frameworks Used</div>
                        <div className="tools">
                            <a>Node.js</a>
                            <a>Express</a>
                            <a>EJS Template Engine</a>
                            <a>PostgreSQL</a>
                            <a>Sequelize</a>
                            <a>HTML/CSS/JS</a>
                        </div>
                    </div>
                    <div className="work-element">
                        <div className="title-main">Bohannan Medical</div>
                        <img src={require("./bomed.png")} alt="Bohannan Medical" />
                        <div className="title">Description</div>
                        <div className="description"></div>
                        <div className="title-ul">Tools Used</div>
                        <div className="tools">
                            <a>Wordpress CRM</a>
                            <a>HTML/CSS</a>
                        </div>
                    </div>
                    <div className="work-element">
                        <div className="title-main">Something</div>
                        <img src="" alt="Dunno yet" />
                        <div className="title">Description</div>
                        <div className="description"></div>
                        <div className="title">Tools Used</div>
                        <div className="tools"></div>
                    </div>
                </div>
                <div className="github-link">
                    <img src={require("./GitHub_Logo_White.png")} onClick={this.githubLink} />
                </div>
            </div>
        )
    }
}

export { Home, Work };

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
