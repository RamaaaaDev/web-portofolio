import { useState } from "react";
import { Link } from "react-scroll";
import "../styles/Header.css"; // Pastikan path file CSS benar

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav-logo">Tegar.</a>

        {/* Menu navigasi */}
        <ul className={`nav-list ${isMenuOpen ? "show-menu" : ""}`}>
          <li><Link to="home" className="nav-link">Home</Link></li>
          <li><Link to="about" className="nav-link">About</Link></li>
          <li><Link to="portfolio" className="nav-link">Portfolio</Link></li>
          <li><Link to="contact-me" className="nav-link">Contact Me</Link></li>
          

          {/* Tombol close menu */}
          <div className="nav-close" onClick={() => setIsMenuOpen(false)}>✖</div>
        </ul>

        {/* Tombol menu untuk tampilan mobile */}
        <div className="nav-toggle" onClick={() => setIsMenuOpen(true)}>☰</div>
      </nav>
    </header>
  );
}

export default Header;
