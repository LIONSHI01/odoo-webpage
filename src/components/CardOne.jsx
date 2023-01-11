import React from "react";
import { Row, Col, Image, Container, Button } from "react-bootstrap";

import { IoIosArrowForward } from "./ReactIcons";
import image01 from "../assets/img_01.jpg";
import { PlayVideoBtn } from "./index";

const CardOne = () => {
  return (
    <Container className="my-5">
      <Row className="col-gap-4">
        <Col className="position-relative">
          <div
            className="d-flex flex-column shadow rounded-xl p-5 my-6"
            style={{ gap: "1rem", width: "85%" }}
          >
            <h4 className="h5 font-weight-normal">Awesome projects</h4>

            <div className="d-flex justify-content-between align-items-center py-3 font-weight-normal project-item1 position-relative">
              <span>Create the new logo</span>
              <div
                className="d-flex align-items-center"
                style={{ gap: "0.8rem" }}
              >
                <span className="text-muted">3:50</span>
                <IoIosArrowForward size={15} className="text-muted" />
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-3 font-weight-normal project-item2 position-relative">
              <span>Set up the color palette</span>
              <div
                className="d-flex align-items-center"
                style={{ gap: "0.8rem" }}
              >
                <span className="text-muted">4:00</span>
                <IoIosArrowForward size={15} className="text-muted" />
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-3 font-weight-normal project-item3 position-relative">
              <span>Wireframe and prototype</span>
              <div
                className="d-flex align-items-center"
                style={{ gap: "0.8rem" }}
              >
                <span className="text-muted">6:50</span>
                <IoIosArrowForward size={15} className="text-muted" />
              </div>
            </div>
          </div>
          <div
            className=""
            style={{
              position: "absolute",
              top: 0,
              right: -20,
              width: "21rem",
              zIndex: 10,
            }}
          >
            <Image
              src={image01}
              alt="tools"
              className="img-fluid rounded-xl shadow"
            />
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                zIndex: 20,
              }}
            >
              <PlayVideoBtn />
            </div>
          </div>
        </Col>
        <Col>
          <Button
            className="rounded-pill mb-4"
            style={{ backgroundColor: "#FEBD3D", borderColor: "#FEBD3D" }}
          >
            Tools
          </Button>
          <h2
            className="mb-5 h1 font-weight-normal"
            style={{ letterSpacing: "1px" }}
          >
            We build for designers and developers
          </h2>
          <p className="text-muted fs-4 line-height-paragraph">
            Get components and examples, including tons of variables that will
            help you grow your business.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CardOne;
