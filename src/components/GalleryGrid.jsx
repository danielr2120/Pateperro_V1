import { Link } from "react-router-dom";

function GalleryGrid({ images, basePath }) {
  if (!basePath) {
    console.error("basePath UNDEFINED");
    return null;
  }

  return (
    <div className="grid">
      {images.map((img) => (
        <Link
          key={img.id}
          to={`/${basePath}/${img.id}`}
        >
          <img src={img.url} alt="" />
        </Link>
      ))}
    </div>
  );
}

export default GalleryGrid;