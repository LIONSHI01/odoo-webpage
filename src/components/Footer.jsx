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
    <footer
      className="pt-5 pb-1 steap-border-top"
      style={{ backgroundColor: "var(--color-dark)", color: "white" }}
    >
      <Container>
        {/* CTA in Footer */}
        <div className="d-flex align-items-center justify-content-between my-5">
          <div>
            <h4>Brilliant solutions for your ideas</h4>
            <span>Modern-looking websites.</span>
          </div>
          <div className="d-flex col-gap-1">
            <Button
              className="d-flex justify-content-center align-items-center py-2 px-4 rounded-btn odoo-white-btn "
              style={{
                backgroundColor: "white",
                border: "white",
                color: "black",
                gap: "0.8rem",
              }}
            >
              <HiOutlineDocument size={20} className="footer-icon" />
              <span>Documentation</span>
            </Button>
            <Button
              className="d-flex align-items-center py-2 px-4 rounded-btn"
              style={{
                gap: "0.8rem",
              }}
            >
              <span>Purchase now</span>
            </Button>
          </div>
        </div>
        {/* Footer Columns */}
        <div className="footer-border mb-5">
          <Row>
            <Col xs={6} className="d-flex flex-column col-gap-2">
              <Image src={OdooLogo} width="100px" />
              <p className="fs-6" style={{ color: "var(--color-grey)" }}>
                Odoo attempts to bring the best development experience to
                designers and developers by offering the tools needed for having
                a quick and solid start in most web projects.
              </p>
              <div className="d-flex col-gap-4">
                <a href="/" target="_blank" className="odoo-footer-link">
                  <VscGlobe size={23} color="var(--color-grey)" />
                </a>
                <a href="/" target="_blank" className="odoo-footer-link">
                  <BsGithub size={23} color="var(--color-grey)" />
                </a>
                <a href="/" target="_blank" className="odoo-footer-link">
                  <BsInstagram size={23} color="var(--color-grey)" />
                </a>
                <a href="/" target="_blank" className="odoo-footer-link">
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
                        className="odoo-footer-link"
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
          className="d-flex justify-content-between py-1"
          style={{ color: "var(--color-grey)" }}
        >
          <span>&#169; Odoo. All rights reserved</span>
          <div className="d-flex col-gap-3">
            <a href="/" target="_blank" className="odoo-footer-link">
              Terms
            </a>
            <a href="/" target="_blank" className="odoo-footer-link">
              Privacy
            </a>
            <a href="/" target="_blank" className="odoo-footer-link">
              Cookies
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
