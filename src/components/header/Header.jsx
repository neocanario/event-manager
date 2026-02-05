import './Header.css';
import { Link } from 'react-router-dom';
import { FaBell, FaEnvelope, FaUser, FaCalendarAlt } from 'react-icons/fa';

export function Header () {
    return (
        <header>
            <div className='header-logo'>
                <Link to="/" className='logo-link'>
                    <FaCalendarAlt className='logo-icon' />
                    <span className='logo-text'>Event Manager</span>
                </Link>
            </div>
            <div className='navbar'>
                <nav>
                    <ul className='header-nav-list'>
                        <li>
                            <Link to="/events" className='nav-link'>
                                <FaBell className='nav-icon' />
                                <span>Notificaciones</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/events" className='nav-link'>
                                <FaEnvelope className='nav-icon' />
                                <span>Mensajes</span>
                            </Link>
                        </li>
                        <li className='user-profile'>
                            <Link to="/events" className='nav-link'>
                                <FaUser className='nav-icon' />
                                <span>Usuarios</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}