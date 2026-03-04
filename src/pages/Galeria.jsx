import { useEffect, useState } from "react";
import GalleryGrid from "../components/GalleryGrid";

function Galeria({ titulo, albumId, basePath }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!albumId) return;

    fetch(`https://shows-scheduling-antibodies-cement.trycloudflare.com/api/images?albumId=${albumId}`)
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.error(err));
  }, [albumId]);

  return (
    <main>
      <h1>{titulo}</h1>
      <GalleryGrid images={images} basePath={basePath} />
    </main>
  );
}

export default Galeria;