import React from 'react';
import '../client/scss/components/Footer.scss'

// BootStrap Icons
import { IconContext } from "react-icons";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-left">
                    <div className="footer-links">
                        <a href="/">
                            <label>Home</label>
                        </a>
                        <div onClick={()=>{
                            window.location.hash=='#/' ?
                            document.getElementById('AboutSection').scrollIntoView()
                            :window.location.replace('/portfolio/#/#AboutSection')}
                            }>
                            <label>About</label>
                        </div>
                        <div onClick={()=>{
                            window.location.hash=='#/' ?
                            document.getElementById('ServicesSection').scrollIntoView()
                            :window.location.replace('/portfolio/#/#ServicesSection')}
                            }>
                            <label>services</label>
                        </div>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="footer-links">
                        <a href="#/contact">
                            <label>Contact</label>
                        </a>
                        <a href="#/projects">
                            <label>Projects</label>
                        </a>
                        <a href="mailto:dharmeshgurnani@protonmail.com">
                            <label>Email</label>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-links">
                    <IconContext.Provider value={{ className: 'footer-icons' }} >
                        <a href="https://www.github.com/dharmeshgurnani" target="_blank" rel="noreferrer" >
                            <BsGithub />
                            <label>Github</label>
                        </a>
                        <a href="https://www.linkedin.com/in/dharmeshgurnani" target="_blank" rel="noreferrer" >
                            <BsLinkedin />
                            <label>Linkedin</label>
                        </a>
                        <a href="https://www.twitter.com/dharmeshgurnani" target="_blank" rel="noreferrer" >
                            <BsTwitter />
                            <label>Twitter</label>
                        </a>
                        <a href="https://www.instagram.com/dharmeshgurnani" target="_blank" rel="noreferrer" >
                            <BsInstagram />
                            <label>Instagram</label>
                        </a>
                    </IconContext.Provider>
                </div>
            </div>
        </footer>
    );
}
