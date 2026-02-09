import { FaGithub, FaInstagram, FaFigma, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">Event Manager</h3>
                        <p className="footer-description">
                            Your professional platform for event management. 
                            Simplify, organize, and manage your events efficiently.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Navigation</h4>
                        <ul className="footer-links">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/finances">Finances</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Resources</h4>
                        <ul className="footer-links">
                            <li><a href="https://github.com/neocanario/event-manager" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                            <li><a href="https://taps-yang-99607121.figma.site/" target="_blank" rel="noopener noreferrer">Figma Design</a></li>
                            <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React Documentation</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Follow Us</h4>
                        <div className="social-links">
                            <a href="https://github.com/neocanario" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://www.instagram.com/joelchdz24/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.linkedin.com/in/joel-sanchez-dev/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://taps-yang-99607121.figma.site/" aria-label="Figma" target="_blank" rel="noopener noreferrer">
                                <FaFigma />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2026 Event Manager. All rights reserved. 
                        <span className="footer-legal"> | Privacy Policy | Cookies | Terms</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}