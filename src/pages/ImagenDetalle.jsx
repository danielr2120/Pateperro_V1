import { useParams, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import images from "../data/imagenes.json";

function ImagenDetalle() {
  const { id } = useParams();
  const location = useLocation();
  const imageRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

  let seccion = "";
  if (location.pathname.startsWith("/expocafe")) {
    seccion = "GaleriaExpoCafe";
  } else if (location.pathname.startsWith("/galeria")) {
    seccion = "test";
  }

  const image = images.find(
    (img) => String(img.id) === String(id) && img.seccion === seccion
  );

  useEffect(() => {
    if (!image) return;

    imageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [image]);

  if (!image) {
    return <p>Imagen no encontrada</p>;
  }

  return (
    <main className="imagen-detalle">
      <div className="detalle-contenido">
        <div className="detalle-imagen" style={{ position: "relative" }}>
          <img
            src={image.url}
            alt={image.nombre || image.autor}
            ref={imageRef}
          />
          <div className="info-icon"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=info" />
          <span class="material-symbols-outlined">
          info
          </span>
          {showTooltip && (
            <div className="tooltip">
              <strong>{image.camara}</strong>
              <br />
              <strong>{image.especificaciones.ISO}</strong>
              <br />
              <strong>{image.especificaciones.Velocidad_obturacion}</strong>
              <br />
              <strong>{image.especificaciones.Apertura}</strong>
              <br />
              <strong>{image.especificaciones.lente}</strong>
              <br />
            </div>
          )}
          </div>
          <span className="pie-imagen">
            <strong>{image.nombre} - {image.autor}</strong>
            <br />
            <strong>{image.lugar}</strong>
            <br />
            <strong>{image.fecha}</strong>
          </span>
        </div>
      </div>
    </main>
  );
}

export default ImagenDetalle;