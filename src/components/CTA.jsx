import React from "react";

import { Container, Button } from "react-bootstrap";
import { HiArrowRight } from "./ReactIcons";

const CTA = () => {
  return (
    <Container className="d-flex flex-column align-items-center my-6">
      <p className="fs-5">I want to start a new project.</p>
      <div className="d-flex col-gap-1">
        <Button
          className="d-flex align-items-center py-1 rounded-btn"
          style={{
            gap: "0.8rem",
            padding: "0 2rem",
          }}
        >
          <span>Buy now</span>
          <HiArrowRight size={18} />
        </Button>
        <Button
          className="d-flex align-items-center py-3 rounded-btn hover-blue-outline"
          style={{
            backgroundColor: "transparent",
            border: "transparent",
            color: "black",
            gap: "0.8rem",
            padding: "0 2rem",
          }}
        >
          Learn more
        </Button>
      </div>
    </Container>
  );
};

export default CTA;
