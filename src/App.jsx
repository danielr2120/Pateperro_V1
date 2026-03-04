import { HashRouter, Routes, Route } from "react-router-dom";
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
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quienessomos" element={<QuienesSomos />} />

        <Route
          path="/galeria"
          element={<Galeria albumId="7274e521-62b2-4106-9966-9d5a76ba0c70" titulo="Galería" basePath="galeria" />}
        />
        <Route path="/galeria/:id" element={<ImagenDetalle />} />

        <Route path="/expocafe/informacion" element={<ExpoCafe />} />
        <Route
          path="/expocafe/galeria"
          element={<Galeria albumId="f2d28afb-abe2-4baa-9b1e-02de6967b5f9" titulo="ExpoCafe" basePath="expocafe/galeria" />} />
        <Route path="/expocafe/galeria/:id" element={<ImagenDetalle />} />

        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;