import React from "react";
import { Form, Button, Col } from "react-bootstrap";

function FormLogin() {
  return (
    <Form>
      <Col sm={8} className="d-flex flex-column mx-auto form-panel">
        <h3 className="fw-bold mb-3">Fazer login</h3>
        <Form.Group className="mb-3">
          <Form.Label>Email, CPF ou PIS</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3 ms-auto">
          Entrar
        </Button>
      </Col>
    </Form>
  );
}

export default FormLogin;
