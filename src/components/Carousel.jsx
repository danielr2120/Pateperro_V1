import { useState } from "react"

function Carousel({images}){
  const [index, setIndex] = useState(0)

  function next() {
    setIndex(index === images.length - 1 ? 0 : index + 1)
  }

  function prev() {
    setIndex(index === 0 ? images.length - 1 : index - 1)
  }

  // Protección por si no hay imágenes
  if (!images || images.length === 0) {
    return <p>No hay imágenes para mostrar</p>
  }
  return (
    <div className="carousel">
      <button onClick={prev} >◀</button>

      <img src={images[index]} alt={`Imagen ${index + 1}`} />

      <button onClick={next}>▶</button>
    </div>
  )
}

export default Carousel

