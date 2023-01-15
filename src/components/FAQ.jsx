import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { HiOutlineDocument, BsPlus } from "./ReactIcons";

const FAQ = () => {
  return (
    <Container>
      <div className="d-flex flex-column align-items-center">
        <h3>Helpful answers</h3>
        <p className="fs-6 text-muted">
          Start building fast, beautiful, and modern-looking websites in no
          time.
        </p>
      </div>
      <Row>
        <Col className="d-flex flex-column col-gap-3">
          <div
            className="d-flex w-100 bg-white shadow p-4 rounded-xl justify-content-between "
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex col-gap-1 align-items-center">
              <HiOutlineDocument size={20} />
              <span>Which license do I need?</span>
            </div>
            <BsPlus size={20} />
          </div>
          <div
            className="d-flex w-100 bg-white shadow p-4 rounded-xl justify-content-between"
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex col-gap-1 align-items-center">
              <HiOutlineDocument size={20} />
              <span>Which license do I need?</span>
            </div>
            <BsPlus size={20} />
          </div>
          <div
            className="d-flex w-100 bg-white shadow p-4 rounded-xl justify-content-between"
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex col-gap-1 align-items-center">
              <HiOutlineDocument size={20} />
              <span>Which license do I need?</span>
            </div>
            <BsPlus size={20} />
          </div>
        </Col>
        <Col className="d-flex flex-column col-gap-3">
          <div
            className="d-flex w-100 bg-white shadow p-4 rounded-xl justify-content-between"
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex col-gap-1 align-items-center">
              <HiOutlineDocument size={20} />
              <span>Which license do I need?</span>
            </div>
            <BsPlus size={20} />
          </div>
          <div
            className="d-flex w-100 bg-white shadow p-4 rounded-xl justify-content-between"
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex col-gap-1 align-items-center">
              <HiOutlineDocument size={20} />
              <span>Which license do I need?</span>
            </div>
            <BsPlus size={20} />
          </div>
          <div
            className="d-flex w-100 bg-white shadow p-4 rounded-xl justify-content-between"
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex col-gap-1 align-items-center">
              <HiOutlineDocument size={20} />
              <span>Which license do I need?</span>
            </div>
            <BsPlus size={20} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const QuestionItem = ({ question }) => {
  return (
    <div
      className="d-flex w-100 bg-white shadow p-4 rounded-xl justify-content-between"
      style={{ cursor: "pointer" }}
    >
      <div className="d-flex col-gap-1 align-items-center">
        <HiOutlineDocument size={20} />
        <span>Which license do I need?</span>
      </div>
      <BsPlus size={20} />
    </div>
  );
};
export default FAQ;
