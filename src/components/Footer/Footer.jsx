import './Footer.css';
import Nav from './components/Navigation/Navigation';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h1 className="footer-logo">My Portfolio</h1>
                <nav>
                    <Nav />
                    <ul className="footer-links">
                        <li><a href="#aboutme">About Me</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="footer-social">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;