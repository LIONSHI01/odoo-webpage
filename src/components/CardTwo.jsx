import React from "react";
import { Row, Col, Image, Container, Button } from "react-bootstrap";

import { BsCheckLg } from "./ReactIcons";
import { PlayVideoBtn } from "./index";
import image02 from "../assets/img_02.jpg";

const CardTwo = () => {
  return (
    <Container className="my-6">
      <Row className="d-flex align-items-center col-gap-4">
        <Col>
          <Button
            className="rounded-pill mb-4"
            style={{
              backgroundColor: "var(--color-green)",
              borderColor: "var(--color-green)",
            }}
          >
            Features
          </Button>
          <p className="line-height-paragraph fs-4 mb-6">
            Get components and examples, including tons of variables that will
            help you grow your business.
          </p>
          <div className="d-flex flex-column col-gap-1">
            <div className="d-flex col-gap-1 align-items-center">
              <span
                className="d-flex justify-content-center align-items-center rounded-lg"
                style={{
                  backgroundColor: "var(--color-green)",
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              >
                <BsCheckLg size={13} color="white" />
              </span>
              <span className="fs-5" style={{ color: "var(--color-green)" }}>
                Perfect for modern startups
              </span>
            </div>
            <div className="d-flex col-gap-1 align-items-center">
              <span
                className="d-flex justify-content-center align-items-center rounded-lg"
                style={{
                  backgroundColor: "var(--color-green)",
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              >
                <BsCheckLg size={13} color="white" />
              </span>
              <span className="fs-5" style={{ color: "var(--color-green)" }}>
                Fully customizable and scalable
              </span>
            </div>
          </div>
        </Col>
        <Col>
          <div className="position-relative odoo-shadow-light-s">
            <Image
              src={image02}
              alt="features"
              className="img-fluid rounded-xl"
            />
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                zIndex: 20,
              }}
            >
              <PlayVideoBtn />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CardTwo;
