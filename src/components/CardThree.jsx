import React from "react";
import { Row, Col, Image, Container, Button, Card } from "react-bootstrap";

import {
  AiOutlineHeart,
  BsCheckLg,
  AiOutlineStar,
  AiOutlineEye,
  FiPaperclip,
} from "./ReactIcons";
import image03 from "../assets/person_03.jpg";
import airbnbImage from "../assets/airbnb.svg";
import company01 from "../assets/company_01.png";
import person01 from "../assets/person_01.jpg";
import person02 from "../assets/person_02.jpg";
import person03 from "../assets/person_03.jpg";

const CardThree = () => {
  return (
    <Container>
      <Row className="d-flex align-items-center">
        <Col className="d-flex col-gap-2 align-items-center">
          <div
            className="d-flex flex-column col-gap-2"
            style={{ width: "50%" }}
          >
            <Card className="rounded-xl overflow-hidden">
              <Card.Img variant="top" src={image03} alt="technology-person" />
              <Card.Body className="d-flex flex-row align-items-center col-gap-1">
                <span
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "#FEBD3D",
                    width: "3rem",
                    height: "3rem",
                    color: "white",
                  }}
                >
                  JH
                </span>
                <span>Jimmy Hendrix</span>

                <AiOutlineHeart size={20} className="ml-auto text-muted" />
              </Card.Body>
            </Card>
            <div className="d-flex col-gap-1 align-items-center bg-white shadow p-3 rounded-xl">
              <span
                className="d-flex justify-content-center align-items-center rounded-circle "
                style={{
                  backgroundColor: "var(--color-green)",
                  width: "3rem",
                  height: "3rem",
                }}
              >
                <BsCheckLg size={19} color="white" />
              </span>
              <div className="d-flex flex-column">
                <span className="fs-5">300+ components</span>
                <span className="text-muted">Built to be customized</span>
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-column col-gap-2"
            style={{ width: "50%" }}
          >
            <div
              className="d-flex flex-column col-gap-3 align-items-center p-5 bg-white shadow rounded-xl"
              style={{ width: "100%" }}
            >
              <Image src={airbnbImage} alt="airbnb" height="35px" />
              <div className="d-flex" style={{ gap: "0.3rem" }}>
                {[1, 2, 3, 4, 5].map((score) =>
                  4.95 > score ? (
                    <AiOutlineStar size={20} color="var(--color-yellow)" />
                  ) : (
                    <AiOutlineStar size={20} className="text-muted" />
                  )
                )}
              </div>
              <div className="d-flex flex-column align-items-center">
                <span className="fs-5">4.95 out of 5 stars</span>
                <span className="text-muted">from 23 reviews</span>
              </div>
            </div>
            <div
              className="d-flex flex-column align-items-center p-4 bg-white shadow rounded-xl"
              style={{ gap: "1.5rem" }}
            >
              <Image src={company01} height="60px" className="rounded-circle" />
              <span className="fs-5">Website UI Kit</span>
              <div className="d-flex">
                <Image
                  src={person01}
                  height="40px"
                  className="rounded-circle person-icon less-margin-right-1"
                />
                <Image
                  src={person02}
                  height="40px"
                  className="rounded-circle person-icon less-margin-right-1"
                />
                <Image
                  src={person03}
                  height="40px"
                  className="rounded-circle person-icon"
                />
              </div>
              <div className="d-flex col-gap-2 p-4 gradient-border-top position-relative ">
                <FiPaperclip size={16} className="text-muted" />
                <AiOutlineEye size={16} className="text-muted" />
                <AiOutlineHeart size={16} className="text-muted" />
              </div>
            </div>
          </div>
        </Col>
        <Col className="d-flex flex-column align-items-start">
          <Button
            className="rounded-pill mb-4"
            style={{
              backgroundColor: "var(--color-blue)",
              borderColor: "var(--color-blue)",
            }}
          >
            Technology
          </Button>
          <h2
            className="mb-5 h1 font-weight-normal"
            style={{ letterSpacing: "1px" }}
          >
            We use the latest technologies on the market
          </h2>
          <p className="text-muted fs-4 line-height-paragraph">
            Get components and examples, including tons of variables that will
            help you grow your business.
          </p>
          <a href="/" className="linkBtn-underline">
            See case studies
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default CardThree;
