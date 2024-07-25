import './Header.css';
import NavTabs from '../Navigation/Navigation.jsx';
import logo from '../../assets/images/Ah-no-bkg.png';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                    <img src={logo} alt="Andrew Hamerly Logo" className="logo" />
                <nav>
                    <NavTabs />
                </nav>
            </div>
        </header>
    );
}

export default Header;