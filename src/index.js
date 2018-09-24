import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Home extends Component {
    render() {
        return (
            <div className="welcometext">hello! my name's nick and i'm a web developer.</div>
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
                <div className="work-wrapper">
                    <div className="work-container">
                        <WorkEntry
                            name="Houndstooth Woodwerk"
                            image={require('./houndstooth.png')}
                            description="Dynamic web presence for carpentry business"
                            tools1="Node.js"
                            tools2="Express"
                            tools3="HTML/CSS"
                            tools4="React"
                        />
                        <WorkEntry
                            name="Compendium of Ghara"
                            image={require('./ghara.png')}
                            description="PostgreSQL database with custom UI web portal"
                            tools1="Node.js"
                            tools2="Express"
                            tools3="EJS Template Engine"
                            tools4="PostgreSQL"
                            tools5="Sequelize"
                            tools6="HTML/CSS/JS"
                        />
                        <WorkEntry
                            name="Bohannan Medical"
                            image={require('./bomed.png')}
                            description="eCommerce site for orthopedic devices"
                            tools1="Wordpress CMS"
                            tools2="HTML/CSS"
                        />
                        <WorkEntry
                            name="Personal Site"
                            image={require('./personal.png')}
                            description="Personal portfolio site made with React"
                            tools1="HTML/CSS"
                            tools2="React"
                        />
                    </div>
                </div >
                <div className="github-link-container">
                    <div className="github-link">
                        <img src={require("./GitHub_Logo_White.png")} onClick={this.githubLink} />
                    </div>
                </div>
            </div>
        )
    }
}

class WorkEntry extends Component {
    render() {
        return (
            <div className="work-element">
                <div className="title-main">{this.props.name}</div>
                <img src={this.props.image} alt="Dunno yet" />
                <div className="description">{this.props.description}</div>
                <div className="title-ul">Tools Used</div>
                <div className="tools">
                    <a>{this.props.tools1}</a>
                    <a>{this.props.tools2}</a>
                    <a>{this.props.tools3}</a>
                    <a>{this.props.tools4}</a>
                    <a>{this.props.tools5}</a>
                    <a>{this.props.tools6}</a>
                </div>
            </div>
        )
    }
}

export { Home, Work };

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
