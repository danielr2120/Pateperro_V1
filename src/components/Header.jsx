import logo from '../assets/Logo2.png'
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
      <li>
        <Link to="/">
        <img src={logo} alt="Logo PatePerro" width="186x" height="43px" className='logo-img'/>
        </Link>
      </li>
      
    </header>
  )
}
export default Header