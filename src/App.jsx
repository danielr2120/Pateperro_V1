import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Galeria from "./pages/Galeria";
import ImagenDetalle from "./pages/ImagenDetalle";
import ExpoCafe from "./pages/expo_cafe";
import Contacto from "./pages/contacto";
import QuienesSomos from "./pages/QuienesSomos";

function App() {
  return (
    <BrowserRouter basename="Pateperro_V1">
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienessomos" element={<QuienesSomos />} />

        <Route path="/galeria" element={<Galeria seccion="test" titulo="Galería" basePath="galeria"/>} />
        <Route path="/galeria/:id" element={<ImagenDetalle />} />

        <Route path="/expocafe/informacion" element={<ExpoCafe />} />
        <Route path="/expocafe/galeria" element={<Galeria seccion="GaleriaExpoCafe" titulo="ExpoCafe" basePath={"expocafe/galeria"}/>} />
        <Route path="expocafe/galeria/:id" element={<ImagenDetalle />} />

        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;