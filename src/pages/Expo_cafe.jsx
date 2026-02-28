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
import {useTranslation} from "react-i18next"

function ExpoCafe(){
  const {t, i18n} = useTranslation("global") 
  return(
    <main className="expoCafe">
      {/* Introducción */}
      <section className="expoCafe-titulo">
        <h2>Expo Cafe</h2>
        <p>{t("expoCafe.informacion")}</p>
      </section>
      {/* Temáticas */}
      <section className="expoCafe-tematicas">
        <h3>{t("expoCafe.tematicas.titulo")}:</h3>
        <ul>
          <li>{t("expoCafe.tematicas.tema1")}</li>
          <li>{t("expoCafe.tematicas.tema2")}</li>
        </ul>
      </section>
      {/* Tips */}
      <section className="expoCafe-tips">
        <h3>{t("expoCafe.tips.titulo")}:</h3>
        <ul>
          <li>
            {t("expoCafe.tips.tip1")}
          </li>
          <li>
            {t("expoCafe.tips.tip2")}
          </li>
          <li>
            {t("expoCafe.tips.tip3")}
          </li>
          <li>
            {t("expoCafe.tips.tip4")}
          </li>
        </ul>
      </section>
      {/* Curaduría */}
      <section className="expoCafe-curaduria">
        <h3>{t("expoCafe.curaduria.titulo")}:</h3>
        <p>{t("expoCafe.curaduria.texto")}</p>
      </section>
      {/* Ejemplos */}
      <section className="expoCafe-ejemplos">
        <h3>{t("expoCafe.ejemplos.titulo")}:</h3>
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