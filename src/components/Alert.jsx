import Alert from "react-bootstrap/Alert";
const Alerta = ({ error, color, mensaje }) => {
  if (error === undefined) {
    error = false;
    return;
  }
  return (
      <Alert variant={color} show={error ? true : false || error ? true : true}>{mensaje}</Alert>
  );
};

export default Alerta;
