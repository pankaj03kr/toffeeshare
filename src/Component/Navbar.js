import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Headers = () => {
  return (
    <div className="App">
      <Navbar
        bg="myblue"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand>
          <a href="#">
            <img
              src="https://toffeeshare.com/static/media/logo.42a58a0d.png"
              width="40px"
              height="40px"
              alt=" Logo"
            />
            <sapn className="decoration">ToffeeShare</sapn>
            {/* <div>
            <span>Making Sharing Sweet</span>
            </div> */}
          </a>

          {/* <img src="https://toffeeshare.com/static/media/logo.42a58a0d.png" width="40px" height="40px" />{' '} */}
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            {/* <NavDropdown title="Products">
              <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">
                Coffee
              </NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">
                Chocolate
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/">Transfer</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/faq">FaQ</Nav.Link>
            <Nav.Link href="/privacy">Privacy</Nav.Link>

            <Nav.Link className="download" href="/download">
              Download
            </Nav.Link>
            <Nav.Link className="nearbydevice" href="/nearby">
              Nearby Device
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <div className="content">This is a content.</div> */}
    </div>
  );
};

export default Headers;
