import images from "../data/imagenes.json";
import GalleryGrid from "../components/GalleryGrid";

function Galeria({ seccion, titulo, basePath }) {
  const imagesFiltradas = images.filter(
    (img) => img.seccion === seccion
  );

  return (
    <main>
      <h1>{titulo}</h1>
      <GalleryGrid
        images={imagesFiltradas}
        basePath={basePath}
      />
    </main>
  );
}

export default Galeria;