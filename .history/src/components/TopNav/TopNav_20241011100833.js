import React from "react";
import "./top-nav.scss";
import { LuCalendarCheck } from "react-icons/lu";
import { CgBell } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export const TopNav = () => {
  return (
    <>
      {" "}
      <Navbar bg="dark" data-bs-theme="dark" className="top-nav-container">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <ul className="list-inline">
              <li className="list-inline-item">
                <LuCalendarCheck />
              </li>
              <li className="list-inline-item">
                <CgBell />
              </li>{" "}
              <li className="list-inline-item">
                <MdOutlineEmail />
              </li>
            </ul>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
