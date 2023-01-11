import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";

const CardOne = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h4 className="h5 font-weight-normal">Awesome projects</h4>
          <div>
            <p>Create the new logo</p>
            <span>6:50</span>
          </div>
          <p>Set up the color palette</p>
          <p>Wireframe and prototype</p>
        </Col>
        <Col>ROW 2</Col>
      </Row>
    </Container>
  );
};

export default CardOne;
