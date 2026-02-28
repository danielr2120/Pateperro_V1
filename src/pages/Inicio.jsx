import {useTranslation} from "react-i18next"
function Inicio() {
  const [t, i18n] = useTranslation("global");
  return (
    <main className="inicio">
      <section className="frase">
        <p>
        {t("inicio.textoPrincipal")}
        </p>
      </section>
      <section className="imagen"></section>
    </main>
  )
}

export default Inicio