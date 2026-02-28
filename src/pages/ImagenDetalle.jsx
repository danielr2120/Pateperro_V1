import { useParams, useLocation } from "react-router-dom";
import { useEffect, useRef} from "react";
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

        <div className="detalle-imagen">
          <img
            src={image.url}
            alt={image.nombre.es || image.autor}
            ref={imageRef}
          />
        </div>

        <aside className="detalle-texto">

          {image.nombre.es && (
            <h1 className="titulo-obra">{image.nombre.es}</h1>
          )}

          {(image.lugar || image.fecha) && (
            <p className="meta-obra">
              {image.lugar.es}
              {image.fecha && ` — ${image.fecha}`}
            </p>
          )}

          {image.descripcion_foto.es && (
            <p className="descripcion-foto">
              {image.descripcion_foto.es}
            </p>
          )}

          {image.autor && (
            <h2 className="autor-obra">{image.autor}</h2>
          )}

          {image.descripcion_autor.es && (
            <p className="descripcion-autor">
              {image.descripcion_autor.es}
            </p>
          )}

          {image.especificaciones && (
            <ul className="ficha-tecnica">
              {image.camara && <li>{image.camara}</li>}
              {image.especificaciones.ISO && <li>ISO {image.especificaciones.ISO}</li>}
              {image.especificaciones.Velocidad_obturacion && (
                <li>{image.especificaciones.Velocidad_obturacion}</li>
              )}
              {image.especificaciones.Apertura && (
                <li>{image.especificaciones.Apertura}</li>
              )}
              {image.especificaciones.Lente && (
                <li>{image.especificaciones.Lente}</li>
              )}
            </ul>
          )}

        </aside>
      </div>
    </main>
  )
}
export default ImagenDetalle;