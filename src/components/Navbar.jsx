import React from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar as NavbarBs,
} from "react-bootstrap";

import OdooLogo from "../assets/odoo-white.svg";
import { FiShoppingBag } from "./ReactIcons";

import { NAVBARLINKS } from "../data/constants";

const Navbar = () => {
  return (
    <NavbarBs sticky="top" style={{ backgroundColor: "#038AFF" }}>
      <Container
        className="py-4 "
        style={{
          borderBottom: "2px solid rgba(255, 255, 255, 0.25)",
        }}
      >
        <NavbarBs.Brand href="/">
          <Image src={OdooLogo} width="100px" />
        </NavbarBs.Brand>
        <Nav className="me-auto" style={{ gap: "1rem" }}>
          {NAVBARLINKS.map((item) => (
            <Nav.Link
              key={item.item}
              href={item.url}
              style={{ color: "#e6e6e6" }}
            >
              {item.item}
            </Nav.Link>
          ))}
        </Nav>
        <div className="d-flex" style={{ gap: "2rem" }}>
          <Button
            style={{
              backgroundColor: "#038AFF",
              border: "none",
              color: "#e6e6e6",
            }}
          >
            Sign in
          </Button>
          <Button
            className="d-flex align-items-center py-2 px-3"
            style={{
              backgroundColor: "#fff",
              border: "none",
              color: "black",
              gap: "0.8rem",
            }}
          >
            <FiShoppingBag size={18} />
            <span>Buy now</span>
          </Button>
        </div>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
