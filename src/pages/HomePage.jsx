import { Row, Col } from "react-bootstrap";
import FormLogin from "../components/FormLogin";
import LoggedButtons from "../components/LoggedButtons";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

// TODO: Centralizar verticalmente os itens

function HomePage() {
  const [name, setName] = useState("Visitante");
  const [cookies, setCookies, removeCookie] = useCookies(["user"]);

  useEffect(() => {
    console.log(cookies);
    if (cookies.user) setName(cookies.user.name);
    else setName("Visitante");
  }, [cookies]);

  return (
    <Row className="d-flex align-items-center">
      <Col md={6} className="ps-4 d-flex">
        <h1 className="mx-auto my-4">Olá, {name}!</h1>
      </Col>
      <Col md={6} className="d-flex flex-column">
        {cookies.user ? (
          <LoggedButtons setCookies={setCookies} removeCookie={removeCookie} />
        ) : (
          <FormLogin setCookies={setCookies} />
        )}
      </Col>
    </Row>
  );
}

export default HomePage;
