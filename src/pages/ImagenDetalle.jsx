import { useParams } from "react-router-dom";

const images = [
  {
    id: "1",
    url: new URL("../assets/test/img1.jpg", import.meta.url).href,
    autor: "Participante",
  },
  {
    id: "2",
    url: new URL("../assets/test/img2.jpg", import.meta.url).href,
    autor: "Participante",
  },
  {
    id: "3",
    url: new URL("../assets/test/img3.jpg", import.meta.url).href,
    autor: "Participante",
  },
  {
    id: "4",
    url: new URL("../assets/test/img4.jpg", import.meta.url).href,
    autor: "Participante",
  },
  {
    id: "5",
    url: new URL("../assets/test/img5.jpg", import.meta.url).href,
    autor: "Participante",
  },
  {
    id: "6",
    url: new URL("../assets/test/img6.jpg", import.meta.url).href,
    autor: "Participante",
  },
  {
    id: "7",
    url: new URL("../assets/test/img7.jpg", import.meta.url).href,
    autor: "Participante",
  },
];

function ImagenDetalle() {
  const { id } = useParams();
  const image = images.find(img => img.id === id);

  if (!image) {
    return <p>Imagen no encontrada</p>;
  }

  return (
 <main className="imagen-detalle">

  {/* CONTENEDOR FLEX */}
  <div className="detalle-contenido">

    {/* Imagen */}
    <div className="detalle-imagen">
      <img src={image.url} alt={`Foto de ${image.autor}`} />
    </div>

    {/* Columna derecha */}
    <aside className="detalle-lateral">

      {/* Autor */}
      <div className="detalle-autor">
        <strong>Autor:</strong> {image.autor}
      </div>

      {/* Comentarios */}
      <section className="detalle-comentarios">
        <h3>Comentarios</h3>

        <div className="detalle-comentario">
          <strong>Ana</strong>
          <p>La textura del grano es increíble.</p>
        </div>

        <div className="detalle-comentario">
          <strong>Carlos</strong>
          <p>Muy buen contraste.</p>
        </div>
      </section>

    </aside>

  </div>

</main>
  );
}

export default ImagenDetalle;
