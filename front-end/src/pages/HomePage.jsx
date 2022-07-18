import { Row, Col } from "react-bootstrap";
import FormLogin from "../components/FormLogin";
import FormCadastro from "../components/FormCadastro";
import FormEdit from "../components/FormEdit";
import LoggedButtons from "../components/LoggedButtons";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

// TODO: Centralizar verticalmente os itens

function HomePage() {
  const [name, setName] = useState("Visitante");
  const [cookies, setCookies, removeCookie] = useCookies(["user"]);
  const [page, setPage] = useState("home");

  useEffect(() => {
    console.log(cookies);
    if (cookies.user) setName(cookies.user.name);
    else setName("Visitante");
  }, [cookies]);

  return (
    <Row className="d-flex align-items-center my-5 mx-0">
      <Col className="ps-4 d-flex">
        <h1 className="mx-auto my-4">Olá, {name}!</h1>
      </Col>
      {page === "home" ? (
        <Col md={6} className="d-flex flex-column">
          {cookies.user ? (
            <LoggedButtons
              setPage={setPage}
              setCookies={setCookies}
              removeCookie={removeCookie}
            />
          ) : (
            <FormLogin setPage={setPage} setCookies={setCookies} />
          )}
        </Col>
      ) : page === "register" ? (
        <Col md={12}>
          <FormCadastro setPage={setPage} setCookies={setCookies} />
        </Col>
      ) : page === "edit" ? (
        <Col md={12}>
          <FormEdit
            setPage={setPage}
            setCookies={setCookies}
            cookies={cookies}
            removeCookie={removeCookie}
          />
        </Col>
      ) : null}
    </Row>
  );
}

export default HomePage;
