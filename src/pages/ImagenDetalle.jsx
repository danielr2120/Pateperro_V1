import { useParams, useLocation } from "react-router-dom";
import images from "../data/imagenes.json";

function ImagenDetalle() {
  const { id } = useParams();
  const location = useLocation();

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
            <strong>Autor:</strong>{" "}
            {image.autor || "Desconocido"}
          </span>
        </div>
      </div>
    </main>
  );
}

export default ImagenDetalle;