import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import { HiOutlineDocument, BsPlus } from "./ReactIcons";
import { FAQs } from "../data/constants";

const FAQ = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    return setSelected(i);
  };

  return (
    <section>
      <Container className="my-6">
        <div className="d-flex flex-column align-items-center">
          <h3 className="fs-3 font-weight-normal mb-2">Helpful answers</h3>
          <p className="fs-6 text-muted mb-5">
            Start building fast, beautiful, and modern-looking websites in no
            time.
          </p>
        </div>
        <Row>
          <Col className="d-flex flex-column col-gap-3">
            {FAQs.map((item, i) => (
              <AccordionItem
                key={i}
                index={i}
                question={item.question}
                answer={item.answer}
                selected={selected}
                onClickFn={toggle}
              />
            ))}
          </Col>
          <Col className="d-flex flex-column col-gap-3">
            {FAQs.map((item, i) => (
              <AccordionItem
                key={i + 3}
                index={i + 3}
                question={item.question}
                answer={item.answer}
                selected={selected}
                onClickFn={toggle}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const AccordionItem = ({
  question,
  answer,
  index,
  onClickFn,
  selected,
  otherProps,
}) => {
  return (
    <div
      className="d-flex flex-column col-gap-3 w-100 bg-white p-4 rounded-xl odoo-shadow-light odoo-card-border"
      style={{ cursor: "pointer" }}
      onClick={() => onClickFn(index)}
      {...otherProps}
    >
      <div className="d-flex justify-content-between">
        <div className="d-flex col-gap-1 align-items-center">
          <HiOutlineDocument size={20} />
          <span>{question}</span>
        </div>
        <BsPlus size={20} />
      </div>
      <span
        className={`accordion-content ${selected === index ? "show" : null}  `}
      >
        {answer}
      </span>
    </div>
  );
};

export default FAQ;
