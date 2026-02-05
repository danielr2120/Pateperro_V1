function Contacto(){
  return(
    <main className="contacto">
      <section className="datos">
        <h2>Dejanos tus datos</h2>
        <label htmlFor="nombre">Nombres:</label>
        <input type="text" id="nombre" name="nombre"></input>
        <label htmlFor="apellido">Apellidos:</label>
        <input type="text" id="apellido" name="apellido"></input>
        <label htmlFor="correo">Correo Electrónico:</label>
        <input type="email" id="correo" name="correo"></input>
        <label htmlFor="pais">País:</label>
        <select id="pais">
          <option value="">-- Elige un país --</option>
          <option value="colombia">Colombia</option>
          <option value="mexico">México</option>
          <option value="argentina">Argentina</option>
          <option value="espana">España</option>
        </select>
        <button>Enviar</button>
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