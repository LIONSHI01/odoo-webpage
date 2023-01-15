import React, { useEffect, useState } from "react";
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
  const [sticky, setSticky] = useState(false);

  const setNavSticky = () => {
    if (window.scrollY >= 1) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setNavSticky, true);
  }, []);

  return (
    <NavbarBs sticky="top" style={{ backgroundColor: "var(--color-blue)" }}>
      <Container
        className={!sticky && "nav-sticky"}
        style={{ padding: "0.6rem 0" }}
      >
        <NavbarBs.Brand href="/">
          <Image src={OdooLogo} width="100px" />
        </NavbarBs.Brand>
        <Nav className="me-auto" style={{ gap: "1rem" }}>
          {NAVBARLINKS.map((item) => (
            <Nav.Link
              key={item.item}
              href={item.url}
              style={{ color: "var(--color-blue-light)" }}
            >
              {item.item}
            </Nav.Link>
          ))}
        </Nav>
        <div className="d-flex" style={{ gap: "2rem" }}>
          <Button
            style={{
              backgroundColor: "var(--color-blue)",
              border: "none",
              color: "#e6e6e6",
            }}
          >
            Sign in
          </Button>
          <Button
            className="d-flex align-items-center py-2 px-3 rounded-btn"
            style={{
              backgroundColor: "#fff",
              border: "#fff",
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
