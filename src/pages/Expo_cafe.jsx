import img1 from "../assets/images/img1.png"
import img2 from "../assets/images/img2.png"
import img3 from "../assets/images/img3.png"
import img4 from "../assets/images/img4.png"
import img5 from "../assets/images/img5.jpg"
import img6 from "../assets/images/img6.png"
import img7 from "../assets/images/img7.jpg"
import img8 from "../assets/images/img8.jpg"
import img9 from "../assets/images/img9.jpg"
import img10 from "../assets/images/img10.jpg"

function ExpoCafe(){
  return(
    <main className="expoCafe">
      {/* Introducción */}
      <section className="expoCafe-titulo">
        <h2>Expo Cafe</h2>
        <p>Expo Café es una muestra fotográfica que explora el café como
          territorio cultural, social y estético.</p>
      </section>
      {/* Temáticas */}
      <section className="expoCafe-tematicas">
        <h3>Temáticas:</h3>
        <ul>
          <li>Cafés del Mundo.</li>
          <li>Cultura del Café.</li>
        </ul>
      </section>
      {/* Tips */}
      <section className="expoCafe-tips">
        <h3>Tips:</h3>
        <ul>
          <li>
            Si aún no has hecho las fotos, configura la cámara a máxima
            resolución para poder trabajar rigurosamente la imagen en el
            proceso de impresión.
          </li>
          <li>
            Estudia las temáticas propuestas. Involúcrate con los conceptos,
            visita los lugares y percibe su atmósfera.
          </li>
          <li>
            Inspírate mirando trabajos de otros fotógrafos y busca escenarios 
            o imágenes similares cerca de tu entorno. 
          </li>
          <li>
            Estudia qué equipo podrías usar para hacer la foto imaginada. Dibújala, 
            haz un boceto. Si no tienes claro el equipamento necesario, pregunta en 
            el el Whatsap del Colectivo.
          </li>
        </ul>
      </section>
      {/* Curaduría */}
      <section className="expoCafe-curaduria">
        <h3>Curaduría:</h3>
        <p>Los patrocinadores de la muestra se reservan el derecho de realizar una 
          curaduría sobre las imágenes propuestas.</p>
      </section>
      {/* Ejemplos */}
      <section className="expoCafe-ejemplos">
        <h3>Algunos Ejemplos:</h3>
        <ul>
          <li>
            <a href="https://www.cartierbressonnoesunreloj.com/anders-petersen-mas-alla-de-cafe-lehmitz/">
            Anders Petersen, más allá de "Café Lehmitz"
            </a>
          </li>
        </ul>
        <section className="expoCafe-galeria">
          <section className="galeria-grid">
            <img src={img1} alt="" className="wide" />
            <img src={img2} alt="" className="wide" />
            <img src={img3} alt="" className="wide"/>
            <img src={img4} alt="" className="wide"/>
            <img src={img5} alt="" className="wide"/>
            <img src={img6} alt="" className="wide"/>
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img10} alt="" />
          </section>
        </section>
      </section>
    </main>
  )
}

export default ExpoCafe