
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles['header-container']}`}>
                <div className={styles['header-logo']}>Thasaren</div>
                <nav>
                    <ul className={styles['nav-list']}>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/router">Router</Link></li>
                        <li><Link to="/idecss">IDE CSS</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
