import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";

function FormLogin(props) {
  const [values, setValues] = useState({});

  const onFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const submit = async (event) => {
    event.preventDefault();
    event.persist();

    const formData = new FormData();
    formData.append("username", values.email || values.cpf || values.pis);
    formData.append("password", values.password);

    const response = await fetch(`${props.apiURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.email || values.cpf || values.pis,
        password: values.password,
      }),
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
    //TODO: if login fails, show error message
  };

  const register = () => {
    props.setPage("register");
  };

  return (
    <Form>
      <Col sm={8} className="d-flex flex-column mx-auto form-panel">
        <h3 className="fw-bold mb-3">Fazer login</h3>
        <Form.Group className="mb-3">
          <Form.Label>Email, CPF ou PIS</Form.Label>
          <Form.Control name="email" onChange={onFormChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            name="password"
            type="password"
            onChange={onFormChange}
          />
        </Form.Group>
        <Button onClick={submit} variant="primary" className="my-3 ms-auto">
          Entrar
        </Button>
        <Button onClick={register} variant="link">
          Cadastre-se aqui!
        </Button>
      </Col>
    </Form>
  );
}

export default FormLogin;
