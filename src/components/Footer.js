import '../style/components/Footer.scss'

// BootStrap Icons
import { IconContext } from "react-icons";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
            </div>
            <hr className="hr-line" />
            <div className="footer-right">
                <div className="footer-links">
                    <IconContext.Provider value={{ className: 'footer-icons' }} >
                        <a href="https://www.github.com/dharmeshgurnani" target="_blank" rel="noreferrer" >
                            <BsGithub />
                            Github
                        </a>
                        <a href="https://www.linkedin.com/in/dharmeshgurnani" target="_blank" rel="noreferrer" >
                            <BsLinkedin />
                            Linkedin
                        </a>
                        <a href="https://www.twitter.com/dharmeshgurnani" target="_blank" rel="noreferrer" >
                            <BsTwitter />
                            Twitter
                        </a>
                        <a href="https://www.instagram.com/dharmeshgurnani" target="_blank" rel="noreferrer" >
                            <BsInstagram />
                            Instagram
                        </a>
                    </IconContext.Provider>
                </div>
            </div>
        </footer>
    );
}
