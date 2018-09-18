import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Home extends Component {
    render() {
        return (
            <div className="welcometext">my name's nick. i'm a developer.</div>
        )
    }
}

class Work extends Component {
    render() {
        return (
            <div className="work-container">
                <div className="work-element">
                    <div className="title">Houndstooth Woodwerk</div>
                    <img src={require('./houndstooth.png')} alt="Houndstooth" />
                    <div className="title">Description</div>
                    <div className="description"></div>
                    <div className="title">Tools Used</div>
                    <div className="tools"></div>
                </div>
                <div className="work-element">
                    <div className="title">Compendium of Ghara</div>
                    <img src={require('./ghara.png')} alt="Compendium" />
                    <div className="title">Description</div>
                    <div className="description"></div>
                    <div className="title">Tools Used</div>
                    <div className="tools"></div>
                </div>
                <div className="work-element">
                    <div className="title">Bohannan Medical</div>
                    <img src="" alt="Bohannan Medical" />
                    <div className="title">Description</div>
                    <div className="description"></div>
                    <div className="title">Tools Used</div>
                    <div className="tools"></div>
                </div>
                <div className="work-element">
                    <div className="title">Something</div>
                    <img src="" alt="Dunno yet" />
                    <div className="title">Description</div>
                    <div className="description"></div>
                    <div className="title">Tools Used</div>
                    <div className="tools"></div>
                </div>
            </div>
        )
    }
}

export { Home, Work };

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
