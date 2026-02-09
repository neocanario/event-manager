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
                            Tu plataforma profesional para la gestión de eventos. 
                            Simplifica, organiza y gestiona tus eventos de manera eficiente.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Recursos</h4>
                        <ul className="footer-links">
                            <li><a href="#ayuda">Centro de Ayuda</a></li>
                            <li><a href="#docs">Documentación</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Síguenos</h4>
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
                            <a href="https://figma.com" aria-label="Figma" target="_blank" rel="noopener noreferrer">
                                <FaFigma />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2026 Event Manager. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}