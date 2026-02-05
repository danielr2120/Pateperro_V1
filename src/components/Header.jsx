import logo from '../assets/logo.svg'
import { Link } from "react-router-dom"
function Header() {
  return (
    <header>
      <img src={logo} alt="Logo PatePerro" width="20px" height="30px"/>
      <h1>Colectivo Fotográfico Pateperro</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/Galeria">Galeria</Link></li>
          <li><Link to="/ExpoCafe">Expo Cafe</Link></li>
          <li><Link to="/Contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header