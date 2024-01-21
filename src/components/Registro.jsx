import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Alert from "./Alert";
const Registro = ({ error, setError }) => {
  return (
    <>
      <h1>Crea una cuenta</h1>
      <section>
        <SocialButton facebook={"facebook"} />
        <SocialButton github={"github"} />
        <SocialButton linkedin={"linkedin"} />
      </section>
      <h4>O usa tu email para registrarte</h4>
      <main>
        <Formulario setError={setError} />
      </main>
      <Alert error={error.error} color={error.color} mensaje={error.mensaje} />
    </>
  );
};

export default Registro;
