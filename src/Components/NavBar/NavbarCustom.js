import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NavbarCustom.css";

export default function NavbarCustom({ children }) {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark" className="navbarcustom">
          <Container>
            <Navbar.Brand href="#home">RickAndMorty</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href='/characters' className="link">Characters</Nav.Link>
              <Nav.Link href='/locations' className="link">Locations</Nav.Link>
              <Nav.Link href="/episodes">Episodes</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>{children}</div>
    </>
  );
}