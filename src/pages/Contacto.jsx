import {useTranslation} from "react-i18next"

function Contacto(){
  const [t, i18n] = useTranslation("global");
  return(
    <main className="contacto">
      <section className="datos">
        <h2>{t("contacto.informacion")}</h2>
        <label htmlFor="nombre">{t("contacto.nombre")}:</label>
        <input type="text" id="nombre" name="nombre"></input>
        <label htmlFor="apellido">{t("contacto.apellido")}:</label>
        <input type="text" id="apellido" name="apellido"></input>
        <label htmlFor="correo">{t("contacto.correo")}</label>
        <input type="email" id="correo" name="correo"></input>
        <label htmlFor="pais">{t("contacto.pais")}:</label>
        <select id="pais">
          <option value="">-- {t("contacto.eleccion")} --</option>
          <option value="colombia">Colombia</option>
          <option value="mexico">México</option>
          <option value="argentina">Argentina</option>
          <option value="espana">España</option>
        </select>
        <button>{t("contacto.enviar")}</button>
      </section>
      <section className="contactanos">
        <h2>Contactanos</h2>
        <h3>Télefono:</h3>
        <p>
          +57 3103100000
        </p>
        <h3>Dirección:</h3>
        <p>Calle 13 # 7 - 21 Ipiales, Nariño</p>
      </section>

    </main>
  )

}
export default Contacto