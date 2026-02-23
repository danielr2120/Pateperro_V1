import { useState } from "react";
import logo from '../assets/Logo2.png';
import { Link } from "react-router-dom";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [expoOpen, setExpoOpen] = useState(false); // 👈 estado para dropdown

  return (
    <header className="header">

      <nav className={`nav-left ${menuOpen ? "active" : ""}`}>
        <ul>

          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Inicio
            </Link>
          </li>

          <li>
            <Link to="/Galeria" onClick={() => setMenuOpen(false)}>
              Galeria
            </Link>
          </li>

          {/* Dropdown ExpoCafe */}
          <li 
            className="dropdown"
            onMouseEnter={() => setExpoOpen(true)}
            onMouseLeave={() => setExpoOpen(false)}
          >
            <span className="dropdown-title">ExpoCafe ▾</span>

            {expoOpen && (
              <div className="dropdown-menu">
                <Link 
                  to="/ExpoCafe/Informacion" 
                  onClick={() => {
                    setMenuOpen(false);
                    setExpoOpen(false);
                  }}
                >
                  Información
                </Link>

                <Link 
                  to="/ExpoCafe/Galeria" 
                  onClick={() => {
                    setMenuOpen(false);
                    setExpoOpen(false);
                  }}
                >
                  Galería
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link to="/QuienesSomos" onClick={() => setMenuOpen(false)}>
              ¿Quiénes Somos?
            </Link>
          </li>

          <li>
            <Link to="/Contacto" onClick={() => setMenuOpen(false)}>
              Contacto
            </Link>
          </li>

        </ul>
      </nav>

      {/* Logo */}
      <div className="logo-container">
        <Link to="/">
          <img 
            src={logo} 
            alt="Logo PatePerro" 
            className="logo-img"
          />
        </Link>
      </div>

      {/* Hamburguesa */}
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