import React from "react";
import { Container, Button } from "react-bootstrap";

import { HiArrowRight } from "./ReactIcons";

const Solutions = () => {
  return (
    <Container>
      <div
        className="d-flex justify-content-between align-items-center p-5"
        style={{
          backgroundColor: "var(--color-dark)",
          borderTopRightRadius: "5rem",
          borderBottomLeftRadius: "5rem",
          color: "white",
        }}
      >
        <div className="d-flex flex-column w-50">
          <h4>Infinite solutions</h4>
          <p className="fs-6">
            Intuitive markup, powerful and lightning-fast build tools,
            everything you need to turn your ideas into incredible products.
          </p>
        </div>
        <Button
          className="d-flex align-items-center py-3 px-4 rounded-btn col-gap-1"
          style={{
            backgroundColor: "#fff",
            border: "#fff",
            color: "black",
          }}
        >
          <span className="fs-6">Learn more</span>
          <HiArrowRight size={18} />
        </Button>
      </div>
    </Container>
  );
};

export default Solutions;
