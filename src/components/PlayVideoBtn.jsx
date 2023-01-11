import React from "react";
import Button from "react-bootstrap/Button";

import { BsPlay } from "./ReactIcons";

const PlayVideoBtn = () => {
  return (
    <Button
      className="d-flex align-items-center col-gap-1 bg-white py-2 px-3 rounded-btn border-white"
      style={{ color: "black" }}
    >
      <span className="fs-6">Play video</span>
      <BsPlay size={18} />
    </Button>
  );
};

export default PlayVideoBtn;
