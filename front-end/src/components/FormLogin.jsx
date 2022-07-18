import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";

function FormLogin(props) {
  const [values, setValues] = useState({});

  const onFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
    console.log(name, value);
  };

  const submit = (event) => {
    event.preventDefault();
    event.persist();
    console.log("push data somewhere :)");
    console.log(values);
    props.setCookies("user", values);

    //TODO: make login request to the back-end
    //TODO: if login success, set cookie with user data
    //TODO: if login fails, show error message
  };

  const register = () => {
    props.setPage("register");
  };

  // const submit = () => {
  //   props.setCookies("user", { email: "1", password: "2", name: "fulano" });
  // };

  return (
    <Form onSubmit={submit}>
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
