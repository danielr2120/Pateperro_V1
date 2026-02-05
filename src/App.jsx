import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Inicio from "./pages/inicio"
import Galeria from "./pages/galeria"
import ExpoCafe from "./pages/expo_cafe"
import Contacto from './pages/contacto'


function App() {
  return (
    <BrowserRouter basename='Pateperro_V1'>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Galeria" element={<Galeria />}/>
        <Route path="/ExpoCafe" element={<ExpoCafe />}/>
        <Route path='/Contacto' element={<Contacto />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App