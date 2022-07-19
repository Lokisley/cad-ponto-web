import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

function FormCadastro(props) {
  const [values, setValues] = useState({});

  const onFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const submit = async (event) => {
    event.preventDefault();
    event.persist();

    const response = await fetch(`${props.apiURL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    response
      .json()
      .then((data) => {
        props.setCookies("user", data);
        props.setPage("home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cancel = () => {
    props.setPage("home");
  };

  return (
    <Form>
      <Col xs={10} sm={8} className="d-flex flex-column mx-auto form-panel">
        <h1 className="fw-bold mb-3">Editar dados</h1>
        <Form.Group as={Col} sm={12} className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control name="name" as="input" onChange={onFormChange} />
        </Form.Group>
        <Row>
          <Form.Group as={Col} sm={6} className="mb-3">
            <Form.Label>CPF</Form.Label>
            <Form.Control name="cpf" as="input" onChange={onFormChange} />
          </Form.Group>
          <Form.Group as={Col} sm={6} className="mb-3">
            <Form.Label>PIS</Form.Label>
            <Form.Control name="pis" as="input" onChange={onFormChange} />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} sm={6} className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" onChange={onFormChange} />
          </Form.Group>
          <Form.Group as={Col} sm={6} className="mb-3">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              name="password"
              type="password"
              onChange={onFormChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} xs={8} className="mb-3">
            <Form.Label>Rua</Form.Label>
            <Form.Control name="street" as="input" onChange={onFormChange} />
          </Form.Group>
          <Form.Group as={Col} xs={4} className="mb-3">
            <Form.Label>Número</Form.Label>
            <Form.Control name="number" as="input" onChange={onFormChange} />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} sm={8} className="mb-3">
            <Form.Label>Complemento</Form.Label>
            <Form.Control
              name="complement"
              as="input"
              onChange={onFormChange}
            />
          </Form.Group>
          <Form.Group as={Col} sm={4} className="mb-3">
            <Form.Label>CEP</Form.Label>
            <Form.Control name="cep" as="input" onChange={onFormChange} />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} sm={6} lg={4} className="mb-3">
            <Form.Label>Cidade</Form.Label>
            <Form.Control name="city" as="input" onChange={onFormChange} />
          </Form.Group>
          <Form.Group as={Col} sm={6} lg={4} className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Control name="state" as="input" onChange={onFormChange} />
          </Form.Group>
          <Form.Group as={Col} sm={12} lg={4} className="mb-3">
            <Form.Label>País</Form.Label>
            <Form.Control name="country" as="input" onChange={onFormChange} />
          </Form.Group>
        </Row>
        <Row className="d-flex flex-row gap-5">
          <Button
            as={Col}
            onClick={cancel}
            variant="outline-warning"
            className="mt-3 me-auto"
          >
            Cancelar
          </Button>
          <Button
            as={Col}
            onClick={submit}
            variant="primary"
            type="submit"
            className="mt-3 ms-auto"
          >
            Confirmar
          </Button>
        </Row>
      </Col>
    </Form>
  );
}

export default FormCadastro;
