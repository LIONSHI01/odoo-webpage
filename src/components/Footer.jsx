import React from "react";

import { Container, Button, Row, Col, Image } from "react-bootstrap";
import {
  HiOutlineDocument,
  VscGlobe,
  BsGithub,
  BsInstagram,
  BsFacebook,
} from "./ReactIcons";
import OdooLogo from "../assets/odoo-white.svg";
import { FOOTER_LINKS } from "../data/constants";

const Footer = () => {
  return (
    <div
      className="py-5"
      style={{ backgroundColor: "var(--color-dark)", color: "white" }}
    >
      <Container>
        {/* CTA in Footer */}
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h4>Brilliant solutions for your ideas</h4>
            <span>Modern-looking websites.</span>
          </div>
          <div className="d-flex col-gap-1">
            <Button
              className="d-flex align-items-center py-3 px-5 rounded-btn"
              style={{
                backgroundColor: "white",
                border: "white",
                color: "black",
                gap: "0.8rem",
              }}
            >
              <HiOutlineDocument size={20} color="var(--color-blue)" />
              <span>Documentation</span>
            </Button>
            <Button
              className="d-flex align-items-center py-1 px-4 rounded-btn"
              style={{
                gap: "0.8rem",
              }}
            >
              <span>Purchase now</span>
            </Button>
          </div>
        </div>
        {/* Footer Columns */}
        <div className="footer-border">
          <Row>
            <Col className="d-flex flex-column col-gap-2">
              <Image src={OdooLogo} width="100px" />
              <p className="fs-5" style={{ color: "var(--color-grey)" }}>
                Odoo attempts to bring the best development experience to
                designers and developers by offering the tools needed for having
                a quick and solid start in most web projects.
              </p>
              <div className="d-flex col-gap-4">
                <a href="/" target="_blank" className="odooLink">
                  <VscGlobe size={23} color="var(--color-grey)" />
                </a>
                <a href="/" target="_blank" className="odooLink">
                  <BsGithub size={23} color="var(--color-grey)" />
                </a>
                <a href="/" target="_blank" className="odooLink">
                  <BsInstagram size={23} color="var(--color-grey)" />
                </a>
                <a href="/" target="_blank" className="odooLink">
                  <BsFacebook size={23} color="var(--color-grey)" />
                </a>
              </div>
            </Col>
            {FOOTER_LINKS.map(({ category, links }) => (
              <Col className="d-flex flex-column align-items-center">
                <ul
                  className="d-flex flex-column align-items-start"
                  style={{
                    listStyle: "none",
                  }}
                >
                  <li className="mb-3">{category}</li>
                  {links.map(({ title, link }) => (
                    <li
                      key={title}
                      className="mb-1"
                      style={{ listStyle: "none" }}
                    >
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="odooLink"
                        style={{
                          color: "var(--color-grey)",
                        }}
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </div>
        {/* Copyright row */}
        <div
          className="d-flex justify-content-between"
          style={{ color: "var(--color-grey)" }}
        >
          <span>&#169; Odoo. All rights reserved</span>
          <div className="d-flex col-gap-3">
            <a href="/" target="_blank" className="odooLink">
              Terms
            </a>
            <a href="/" target="_blank" className="odooLink">
              Privacy
            </a>
            <a href="/" target="_blank" className="odooLink">
              Cookies
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
