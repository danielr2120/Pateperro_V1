import GalleryGrid from "../components/GalleryGrid";

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
function Galeria() {
  return (
    <main>
      <section className="galeria">
        <h2>Galería</h2>

        <p>
          
        </p>
        <GalleryGrid images={images} />
      </section>
    </main>
  );
}

export default Galeria;