import { useState } from "react";
const Formulario = ({ setError }) => {
  const [persona, setPersona] = useState({
    nombre: "",
    email: "",
    contraseña: "",
    confirmaContraseña: "",
  });
  const validandoDatos = (evento) => {
    evento.preventDefault();
    const { nombre, email, contraseña, confirmaContraseña } = persona;
    const checkeandoDatos =
      !nombre || !email || !contraseña || !confirmaContraseña;
    const checkPassword = contraseña !== confirmaContraseña;
    checkeandoDatos
      ? setError({
          error: true,
          mensaje: "Completa todos los campos para registrarte correctamente",
          color: "warning",
        })
      : setError({
          error: false,
          mensaje: "Cuenta creada con exito",
          color: "success",
        });
    if (checkPassword) {
      setError({
        error: true,
        mensaje: "Las contraseñas no coinciden",
        color: "danger",
      });
      return;
    }
    setPersona({
      nombre: "",
      email: "",
      contraseña: "",
      confirmaContraseña: "",
    });
    setTimeout(() => {
      setError({
        error: false,
        mensaje: "",
        color: "",
      });
    }, 5000);
  };
  const alCambio = (evento) => {
    setPersona({ ...persona, [evento.target.name]: evento.target.value });
  };
  return (
    <>
      <form
        className="formulario"
        onSubmit={(evento) => {
          validandoDatos(evento);
        }}
      >
        <div className="form-group mb-3">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            onChange={alCambio}
            value={persona.nombre}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="tuemail@ejemplo.com"
            onChange={alCambio}
            value={persona.email}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            name="contraseña"
            className="form-control"
            placeholder="Contraseña"
            onChange={alCambio}
            value={persona.contraseña}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            name="confirmaContraseña"
            className="form-control"
            placeholder="Confirma tu contraseña"
            onChange={alCambio}
            value={persona.confirmaContraseña}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Registrarse
        </button>
      </form>
    </>
  );
};

export default Formulario;
