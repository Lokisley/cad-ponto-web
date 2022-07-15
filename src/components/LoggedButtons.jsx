import React from "react";
import { Button, Col } from "react-bootstrap";

function LoggedButtons(props) {
  const logout = () => {
    props.removeCookie("user");
  };

  return (
    <Col sm={8} lg={6} className="d-flex vstack gap-3 mx-auto">
      <Button variant="primary">Editar Dados</Button>
      <Button onClick={logout} variant="outline-danger">
        Sair
      </Button>
    </Col>
  );
}

export default LoggedButtons;
