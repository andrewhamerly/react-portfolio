import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-social">
                    <a href="https://github.com/andrewhamerly" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/andrewhamerly3/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://stackoverflow.com/users/26425207/andrew" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
                </div>
                <h2 className="footer-logo">Andrew Hamerly React Portfolio</h2>
            </div>
            <div className="container">
            <div className="row">
                <div className="mx-auto">
                    <h5>
                    Source code is licensed under the MIT license.<br />
                    Contents of this site are Copyright © 2024 by Andrew Hamerly.<br />
                    All Content Rights Reserved.
                    </h5>
                </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;