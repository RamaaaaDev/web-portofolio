import {Link} from 'react-scroll'
import "../styles/Footer.css"; // Pastikan path CSS benar

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container container">
                <div className="footer-content">
                    {/* Informasi Footer */}
                    <div className="footer-info">
                        <h3 className="footer-title">Tegar.</h3>
                        <p className="footer-description">
                            Entry-Level AI Engineer with a passion for Machine Learning and Data Science.
                        </p>
                    </div>

                    {/* Social Media */}
                    <div className="footer-social">
                        <h3 className="footer-social-title">Social Media</h3>
                        <div className="social-links">
                            <a href="https://github.com/RamaaaDev" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/tegar-ramadhan-36114627a/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/tegar_361/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h3 className="footer-links-title">Quick Links</h3>
                        <ul className="quick-links">
                            <li><Link to='home' className='footer-list'>Home</Link></li>
                            <li><Link to='about' className='footer-list'>About</Link></li>
                            <li><Link to='portfolio' className='footer-list'>Portfolio</Link></li>
                            <li><Link to='contact-me' className='footer-list'>Contact Me</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p className="copyright">
                        © {new Date().getFullYear()} Tegar. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
