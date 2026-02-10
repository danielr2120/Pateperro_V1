import { useParams } from "react-router-dom";
import { useState } from "react";

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

  const [texto, setTexto] = useState("");
  const [comentarios, setComentarios] = useState([
  { id: 1, autor: "Ana", texto: "La textura del grano es increíble." },
  { id: 2, autor: "Carlos", texto: "Muy buen contraste." }
  ]);
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
    <img src={image.url} alt={image.titulo} />
    <span className="pie-imagen"><strong>Autor:</strong>{image.autor}</span>
  </div>

    {/* Columna derecha */}
    <aside className="detalle-lateral">

      {/* Comentarios */}
      <section className="detalle-comentarios">
      <h3>Comentarios</h3>
        {comentarios.map((c) => (
          <div className="detalle-comentario" key={c.id}>
            <strong>{c.autor}</strong>
            <p>{c.texto}</p>
          </div>
        ))}
      </section>

            <div className="escribe-comentario">
        <textarea
          placeholder="Escribe un comentario..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button
          onClick={() => {
            if (!texto.trim()) return;
            setComentarios([
              ...comentarios,
              { id: Date.now(), autor: "Tú", texto }
            ]);
            setTexto("");
          }}
        >
          Comentar
        </button>
      </div>

    </aside>

  </div>

</main>
);
}

export default ImagenDetalle;
