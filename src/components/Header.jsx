import { useState } from "react";
import logo from '../assets/Logo2.png';
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next"

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [expoOpen, setExpoOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [t, i18n] = useTranslation("global");
  return (
    <header className="header">

      <nav className={`nav-left ${menuOpen ? "active" : ""}`}>
        <ul>

          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              {t("header.inicio")}
            </Link>
          </li>

          <li>
            <Link to="/Galeria" onClick={() => setMenuOpen(false)}>
              {t("header.galeria")}
            </Link>
          </li>

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
                  {t("header.expoCafe.galeria")}
                </Link>

                <Link 
                  to="/ExpoCafe/Galeria" 
                  onClick={() => {
                    setMenuOpen(false);
                    setExpoOpen(false);
                  }}
                >
                  {t("header.expoCafe.informacion")}
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link to="/QuienesSomos" onClick={() => setMenuOpen(false)}>
              {t("header.quienesSomos")}
            </Link>
          </li>

          <li>
            <Link to="/Contacto" onClick={() => setMenuOpen(false)}>
              {t("header.contacto")}
            </Link>
          </li>

        </ul>
      </nav>

      <div className="logo-container">
        <Link to="/">
          <img 
            src={logo} 
            alt="Logo PatePerro" 
            className="logo-img"
          />
        </Link>
      </div>
      <div className="right-actions">
        <li 
          className="dropdown2"
          onMouseEnter={() => setLangOpen(true)}
          onMouseLeave={() => setLangOpen(false)}
        >
          <span className="dropdown-title2">{t("header.idioma.idioma")} ▾</span>
          {langOpen && (
            <div className="dropdown-menu2">
              <Link onClick={() => i18n.changeLanguage("es")}>
                {t("header.idioma.español")}
              </Link>
              <Link onClick={() => i18n.changeLanguage("en")}>
                {t("header.idioma.ingles")}
              </Link>
            </div>
          )}
        </li>
      </div>
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