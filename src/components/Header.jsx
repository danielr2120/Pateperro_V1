import logo from '../assets/logo.svg'
import { Link } from "react-router-dom"
function Header() {
  return (
    <header className= "header">
     
      <nav className='nav-left'>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/Galeria">Galeria</Link></li>
          <li><Link to="/ExpoCafe">Expo Cafe</Link></li>
          <li><Link to="/Contacto">Contacto</Link></li>
        </ul>
      </nav>
      <h1 className='logo-texto'>Colectivo Fotográfico Pateperro</h1>
      <img src={logo} alt="Logo PatePerro" width="20px" height="20px" className='logo-img'/>
    </header>
  )
}
export default Header