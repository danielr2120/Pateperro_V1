import { Link } from "react-router-dom";

function GalleryGrid({ images, basePath }) {
  if (!basePath) {
    console.error("basePath UNDEFINED");
    return null;
  }

  if (!images || images.length === 0) {
    return <p>No hay imágenes disponibles.</p>;
  }

  return (
    <div className="grid">
      {images.map((img) => (
        <Link
          key={img.id}
          to={`/${basePath}/${img.id}`}
        >
          <img
            src={`https://shows-scheduling-antibodies-cement.trycloudflare.com:3001/api/image/${img.id}`}
            alt={img.originalFileName}
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Link>
      ))}
    </div>
  );
}

export default GalleryGrid;