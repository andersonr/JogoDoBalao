import React, { Component } from "react";
import Router from "next/router";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

export default class Index extends Component {
  componentDidMount = () => {
    //Router.push("/components");
  };

  render() {
    return (
      <Container maxWidth="sm">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            Router.push("/components");
          }}
        >
          {" "}
          Componentes de exemplo{" "}
        </Button>
        <hr />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            Router.push("/landing");
          }}
        >
          Landing
        </Button>
      </Container>
    );
  }
}
