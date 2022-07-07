import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

function FormCadastro() {
  return (
    <Form>
      <Col xs={10} sm={8} className="d-flex flex-column mx-auto form-panel">
        <h1 className="fw-bold mb-3">Cadastro de novo usuário</h1>
        <Form.Group as={Col} sm={12} className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control as="input" />
        </Form.Group>
        <Row>
          <Form.Group as={Col} sm={6} className="mb-3">
            <Form.Label>CPF</Form.Label>
            <Form.Control as="input" />
          </Form.Group>
          <Form.Group as={Col} sm={6} className="mb-3">
            <Form.Label>PIS</Form.Label>
            <Form.Control as="input" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} sm={6} className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group as={Col} sm={6} className="mb-3">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} xs={8} className="mb-3">
            <Form.Label>Rua</Form.Label>
            <Form.Control as="input" />
          </Form.Group>
          <Form.Group as={Col} xs={4} className="mb-3">
            <Form.Label>Número</Form.Label>
            <Form.Control as="input" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} sm={8} className="mb-3">
            <Form.Label>Complemento</Form.Label>
            <Form.Control as="input" />
          </Form.Group>
          <Form.Group as={Col} sm={4} className="mb-3">
            <Form.Label>CEP</Form.Label>
            <Form.Control as="input" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} sm={6} lg={4} className="mb-3">
            <Form.Label>Município</Form.Label>
            <Form.Control as="input" />
          </Form.Group>
          <Form.Group as={Col} sm={6} lg={4} className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Control as="input" />
          </Form.Group>
          <Form.Group as={Col} sm={12} lg={4} className="mb-3">
            <Form.Label>País</Form.Label>
            <Form.Control as="input" />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit" className="mt-3 ms-auto">
          Cadastrar
        </Button>
      </Col>
    </Form>
  );
}

export default FormCadastro;
