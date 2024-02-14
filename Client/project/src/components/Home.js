
import React, { useState } from "react";
import ImageSlider from "./ImagesSlider";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from "react-router-dom";

import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  
  const location = useLocation();
  const isHomePage = location.pathname === '';


  return (
    <div className="home-container">
      <Navbar expand="lg" className=" bg-body-tertiary">
      <Container className="custom-navbar">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          <NavDropdown title="General " id="basic-nav-dropdown">
              <NavDropdown.Item href="/gwil">What is WIL</NavDropdown.Item>
              <NavDropdown.Item href="/benefits">Benefits</NavDropdown.Item>
              <NavDropdown.Item href="/engage">Engage with Us</NavDropdown.Item>
              <NavDropdown.Item href="/ges">Example Stories</NavDropdown.Item>
              <NavDropdown.Item href="/gcc">Companies Collaboration</NavDropdown.Item>
              <NavDropdown.Item href="/sp"> Project </NavDropdown.Item>
              <NavDropdown.Item href="/gsap">Submit a Project</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Employers " id="basic-nav-dropdown">
              <NavDropdown.Item href="/ewil"> What is WIL </NavDropdown.Item>
              <NavDropdown.Item href="/ebenefits">Benefits for Employer </NavDropdown.Item>
              <NavDropdown.Item href="/pe">Project Example </NavDropdown.Item>
              <NavDropdown.Item href="/esap">Submit a Project </NavDropdown.Item>
              <NavDropdown.Item href="/cp"> Companies Partners </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Students " id="basic-nav-dropdown">
              <NavDropdown.Item href="/swil"> What is WIL </NavDropdown.Item>
              <NavDropdown.Item href="/sbenefits"> Benefits for students </NavDropdown.Item>
              <NavDropdown.Item href="/p"> Papers </NavDropdown.Item>
              <NavDropdown.Item href="/sp"> Project </NavDropdown.Item>
              <NavDropdown.Item href="/es"> Example Stories </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/contact-us" className="contact-margin">Contact Us</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    { isHomePage && <ImageSlider></ImageSlider> }
    
    </div>
  );
};

export default Home;
