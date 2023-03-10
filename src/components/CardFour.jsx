import React from "react";
import { Row, Col, Image, Container, Button } from "react-bootstrap";

import { BsApple, RiGooglePlayLine } from "./ReactIcons";
import { PlayVideoBtn } from "./index";
import image03 from "../assets/img_03.jpg";

const CardFour = () => {
  return (
    <Container className="my-6">
      <Row>
        <Col
          xs={6}
          className="d-flex flex-column align-items-start col-gap-2"
          style={{
            width: "60%",
          }}
        >
          <Button
            className="rounded-pill mb-4 hover-yellow"
            style={{
              backgroundColor: "var(--color-yellow)",
              borderColor: "var(--color-yellow)",
            }}
          >
            Easy to install
          </Button>
          <h2
            className="h1 font-weight-normal"
            style={{ letterSpacing: "1px" }}
          >
            Download, install and run.
          </h2>
          <p className="text-muted fs-5 line-height-paragraph mb-4">
            Get components and examples, including tons of variables that will
            help you grow your business.
          </p>
          <div className="d-flex col-gap-3 w-100">
            <a
              href="/"
              target="_blank"
              className="d-flex align-items-center  justify-content-center rounded-lg col-gap-1 odooLink"
              style={{
                color: "white",
                backgroundColor: "#000",
                padding: "0.5rem",
                minWidth: "10rem",
                width: "100%",
              }}
            >
              <BsApple size={35} />
              <div className="d-flex flex-column">
                <span className="fs-7" style={{ marginBottom: "-0.5rem" }}>
                  Download on the
                </span>
                <span className="fs-5">App Store</span>
              </div>
            </a>
            <a
              href="/"
              target="_blank"
              className="d-flex align-items-center justify-content-center rounded-lg col-gap-1 odooLink"
              style={{
                color: "white",
                backgroundColor: "#000",
                padding: "0.5rem 0.8rem",
                minWidth: "10rem",
                width: "100%",
              }}
            >
              <RiGooglePlayLine size={35} />
              <div className="d-flex flex-column">
                <span className="fs-7" style={{ marginBottom: "-0.5rem" }}>
                  Download on the
                </span>
                <span className="fs-5">App Store</span>
              </div>
            </a>
          </div>
        </Col>
        <Col>
          <div className="position-relative odoo-shadow-light-s rounded-xl">
            <Image
              src={image03}
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

export default CardFour;
