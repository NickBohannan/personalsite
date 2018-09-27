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
                <div id="work-wrapper">
                    <div className="work-container">
                        <WorkEntry
                            name="Houndstooth Woodwerk"
                            image={require('./houndstooth.png')}
                            link="https://houndstoothfe.herokuapp.com"
                            description="Dynamic web presence for carpentry business"
                            tools1="Node.js"
                            tools2="Express"
                            tools3="HTML/CSS"
                            tools4="React"
                        />
                        <WorkEntry
                            name="Compendium of Ghara"
                            image={require('./ghara.png')}
                            link="https://compendiumofghara.herokuapp.com"
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
                <a className="res-bold-ul">Professional/Volunteer Experience</a><br></br><br></br>
                <a className="res-bold">Bohannan Medical Distributors, Peoria, IL</a><br></br>
                <a className="res-ital">Service Associate, June 2015 to Present</a><br></br>
                <a className="res">Deliver and install orthopedic home medical supplies for recovering patients</a><br></br>
                <a className="res">Consult with physicians and staff on proper use of equipment</a><br></br><br></br>

                <a className="res-bold">Gennesaret Free Clinics, Indianapolis, IN</a><br></br>
                <a className="res-ital">Volunteer Clerk, October 2014 – May 2015</a><br></br>
                <a className="res">Served as a medical assistant/coordinator for a free health clinic based at a Salvation Army rehabilitation facility</a><br></br>
                <a className="res">Took vitals and documented chief concern(s) and past medical history</a><br></br><br></br>

                <a className="res-bold">AlignLife Work and Wellness, Peoria, IL</a><br></br>
                <a className="res-ital">Director of Operations, September 2010 – April 2011</a><br></br>
                <a className="res">Managed an online wellness platform aimed at increasing the health and job performance of employees of client companies</a><br></br>
                <a className="res">Implemented health initiatives like weight loss competitions and nutrition counseling</a><br></br><br></br>

                <a className="res-bold">AmeriCorps*VISTA, Indianapolis, IN</a><br></br>
                <a className="res-ital">Education Coordinator, June 2009 – June 2010</a><br></br>
                <a className="res">Volunteered full-time at a local non-profit legal clinic setting up workshops for low-income and refugee individuals and families</a><br></br>
                <a className="res">Specialized in aiding the local Burmese, Iraqi, and low-income English speaking communities</a><br></br><br></br>

                <a className="res-bold">Exodus Refugee and Immigration, Indianapolis, IN</a><br></br>
                <a className="res-ital">ESL Assistant, January 2007 – June 2010</a><br></br>
                <a className="res">Volunteered tutoring English for an advanced skills Burmese group</a><br></br>
                <a className="res">Focused on real world vocabulary and situations</a><br></br><br></br>

                <a className="res-bold">Computer Express, Indianapolis, IN</a><br></br>
                <a className="res-ital">Retail/Desktop Technician, December 2007 – April 2008</a><br></br>
                <a className="res">Built custom form factor and full tower ATX computers</a><br></br>
                <a className="res">Obtained a CompTIA A+ certification</a><br></br>
                <a className="res">Performed maintenance on a variety of PC types brought in by customers</a><br></br>
                <a className="res">Helped customers by consulting them on their computing needs</a><br></br>
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

class Education extends Component {
    render() {
        return (
            <div className="ed-container">
                <a className="res-bold-ul">Education Experience</a><br></br><br></br>
                <a className="res-bold">Marian University College of Osteopathic Medicine, Indianapolis, IN</a><br></br>
                <a className="res-ital">Doctor of Osteopathic Medicine, Year One Student, April 2015</a><br></br>
                <a className="res">Infectious Diseases Club – Vice President/Member</a><br></br>
                <a className="res">Student Osteopathic Radiology Association - Member</a><br></br><br></br>

                <a className="res-bold">Western Illinois University, Macomb, IL</a><br></br>
                <a className="res-ital">Post-Baccalaureate Student (Pre-Medical), December 2012</a><br></br>
                <a className="res">Phi Kappa Phi Honors Fraternity</a><br></br><br></br>

                <a className="res-bold">Butler University, Indianapolis, IN</a><br></br>
                <a className="res-ital">Bachelor of Arts, August 2008</a><br></br>
                <a className="res">Anthropology of Religion, Anthropology</a><br></br>
                <a className="res">Research Grant Awarded in 2007 to Aid Professor in Audio to Text Transcriptions</a><br></br>
                <a className="res">Butler for Peace Member</a><br></br>
                <a className="res">Butler Secularism and Religion Seminar leader</a><br></br><br></br>

                <a className="res-bold-ul">Honors</a><br></br><br></br>
                <a className="res-bold">Phi Kappa Phi Honors Fraternity, Macomb, IL</a><br></br>
                <a className="res">Phi Kappa Phi is an honors fraternity consisting of the top ten percent of students</a><br></br>
            </div>
        )
    }
}

export { Home, Work, About, Contact, Education };

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
