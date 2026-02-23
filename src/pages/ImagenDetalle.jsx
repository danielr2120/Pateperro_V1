import { useParams, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import images from "../data/imagenes.json";

function ImagenDetalle() {
  const { id } = useParams();
  const location = useLocation();
  const imageRef = useRef(null);

  let seccion = "";
  if (location.pathname.startsWith("/expocafe")) {
    seccion = "GaleriaExpoCafe";
  } else if (location.pathname.startsWith("/galeria")) {
    seccion = "test";
  }

  const image = images.find(
    (img) =>
      String(img.id) === String(id) &&
      img.seccion === seccion
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
        <div className="detalle-imagen">
          <img
            src={image.url}
            alt={image.nombre || image.autor}
          />
          <span className="pie-imagen">
          <strong>{image.nombre}{" - "}{image.autor}</strong>
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