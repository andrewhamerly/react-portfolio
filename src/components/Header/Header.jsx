import './Header.css';
import NavTabs from '../Navigation/Navigation.jsx';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                    <img src="src/assets/images/Ah-no-bkg.png" alt="Andrew Hamerly" className="logo" />
                <nav>
                    <NavTabs />
                </nav>
            </div>
        </header>
    );
}

export default Header;