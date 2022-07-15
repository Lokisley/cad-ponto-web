import { Row, Col } from "react-bootstrap";
import FormLogin from "../components/FormLogin";
import React, { useState, useEffect } from "react";

// TODO: Centralizar verticalmente os itens

function HomePage() {
  const [name, setName] = useState("Visitante");
  return (
    <Row className="d-flex align-items-center">
      <Col md={6} className="ps-4 d-flex">
        <h1 className="mx-auto my-4">Olá, {name}!</h1>
      </Col>
      <Col md={6} className="d-flex flex-column">
        <FormLogin />
      </Col>
    </Row>
  );
}

export default HomePage;
