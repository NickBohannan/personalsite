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

    render() {
        return (
            <div>
                <div className="work-wrapper">
                    <div className="work-container">
                        <WorkEntry
                            name="Houndstooth Woodwerk"
                            image={require('./houndstooth.png')}
                            link="http://houndstoothww.herokuapp.com"
                            description="Dynamic web presence for carpentry business"
                            tools1="Node.js"
                            tools2="Express"
                            tools3="HTML/CSS"
                            tools4="React"
                        />
                        <WorkEntry
                            name="Compendium of Ghara"
                            image={require('./ghara.png')}
                            link="http://compendiumofghara.herokuapp.com"
                            description="PostgreSQL database with custom UI web portal"
                            tools1="Node.js"
                            tools2="Express"
                            tools3="EJS Template Engine"
                            tools4="PostgreSQL/Heroku Postgres"
                            tools5="Sequelize"
                            tools6="HTML/CSS/JS"
                        />
                        <WorkEntry
                            name="Bohannan Medical (WIP)"
                            image={require('./bomed.png')}
                            link="https://www.dmeprovider.com"
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
            </div>
        )
    }
}

class WorkEntry extends Component {

    render() {
        return (
            <div className="work-element">
                <div className="title-main">{this.props.name}</div>
                <a href={this.props.link}>
                    <img src={this.props.image} alt="alttext" />
                </a>
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

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <a>test</a>
            </div>
        )
    }
}

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <div className="contact-element">
                    <a>email: nbohannan@gmail.com</a>
                </div>
            </div>
        )
    }
}

export { Home, Work, About, Contact };

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
