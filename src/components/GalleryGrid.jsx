import { Link } from "react-router-dom";

function GalleryGrid({ images }) {
  return (
    <div className="grid">
      {images.map((img) => (
        <Link key={img.id} to={`/galeria/${img.id}`}>
          <img src={img.url} alt="" />
        </Link>
      ))}
    </div>
  );
}

export default GalleryGrid;