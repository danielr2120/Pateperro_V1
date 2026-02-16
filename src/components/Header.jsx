import { useState } from "react";
import logo from '../assets/Logo2.png';
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      {/* Navegación desktop */}
      <nav className={`nav-left ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
          <li><Link to="/Galeria" onClick={() => setMenuOpen(false)}>Galeria</Link></li>
          <li><Link to="/ExpoCafe" onClick={() => setMenuOpen(false)}>Expo Cafe</Link></li>
          <li><Link to="/Contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
        </ul>
      </nav>

      {/* Logo centrado */}
      <div className="logo-container">
        <Link to="/">
          <img 
            src={logo} 
            alt="Logo PatePerro" 
            className="logo-img"
          />
        </Link>
      </div>

      {/* Botón hamburguesa */}
      <div 
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </header>
  );
}

export default Header;