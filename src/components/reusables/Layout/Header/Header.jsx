import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <h1 className="header-logo">Min.</h1>
                <nav>
                    <ul className="nav-list">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/estructura">Estructura</Link></li>
                        <li><Link to="/tabla">Datos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
