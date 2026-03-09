import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaBell, FaEnvelope, FaUser, FaCalendarAlt, FaRss, FaBars, FaTimes } from 'react-icons/fa';

export function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header>
            <div className='header-logo'>
                <Link to="/" className='logo-link' onClick={closeMenu}>
                    <FaCalendarAlt className='logo-icon' />
                    <span className='logo-text'>Event Manager</span>
                </Link>
            </div>

            <button
                className='hamburger-btn'
                onClick={() => setIsMenuOpen(prev => !prev)}
                aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`navbar ${isMenuOpen ? 'is-open' : ''}`}>
                <nav>
                    <ul className='header-nav-list'>
                        <li>
                            <Link to="/events" className='nav-link' onClick={closeMenu}>
                                <FaBell className='nav-icon' />
                                <span>Notificaciones</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/events" className='nav-link' onClick={closeMenu}>
                                <FaEnvelope className='nav-icon' />
                                <span>Mensajes</span>
                            </Link>
                        </li>
                        <li className='user-profile'>
                            <Link to="/finances" className='nav-link' onClick={closeMenu}>
                                <FaUser className='nav-icon' />
                                <span>Usuarios</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/rss" className='nav-link' onClick={closeMenu}>
                                <FaRss className='nav-icon rss-icon' />
                                <span>RSS</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}