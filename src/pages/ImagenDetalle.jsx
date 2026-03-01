import { useParams, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import images from "../data/imagenes.json";
import { useTranslation } from "react-i18next";

function ImagenDetalle() {
  const { id } = useParams();
  const location = useLocation();
  const imageRef = useRef(null);
  const { t } = useTranslation("global");

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
    return <p>{t("imagenes.noEncontrada")}</p>;
  }

  return (
    <main className="imagen-detalle">
      <div className="detalle-contenido">

        <div className="detalle-imagen">
          <img
            src={image.url}
            alt={t(`imagenes.data.${id}.nombre`, image.autor)}
            ref={imageRef}
          />
        </div>

        <aside className="detalle-texto">

          {/* TÍTULO */}
          <h1 className="titulo-obra">
            {t(`imagenes.data.${id}.nombre`)}
          </h1>

          {/* LUGAR + FECHA */}
          <p className="meta-obra">
            {t(`imagenes.data.${id}.lugar`)}
            {image.fecha && ` — ${image.fecha}`}
          </p>

          {/* DESCRIPCIÓN FOTO */}
          <p className="descripcion-foto">
            {t(`imagenes.data.${id}.descripcion_foto`)}
          </p>

          {/* AUTOR */}
          <h2 className="autor-obra">{image.autor}</h2>

          {/* DESCRIPCIÓN AUTOR */}
          {t(`imagenes.data.${id}.descripcion_autor`, "") && (
            <p className="descripcion-autor">
              {t(`imagenes.data.${id}.descripcion_autor`)}
            </p>
          )}

          {/* FICHA TÉCNICA */}
          {image.especificaciones && (
            <ul className="ficha-tecnica">
              {image.camara && <li>{image.camara}</li>}
              {image.especificaciones.ISO && (
                <li>ISO {image.especificaciones.ISO}</li>
              )}
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
  );
}

export default ImagenDetalle;