import './Header.css';
import Nav from './components/Navigation/Navigation';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">My Portfolio</h1>
                <nav>
                    <Nav />
                    <ul className="nav-links">
                        <li><a href="#aboutme">About Me</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;