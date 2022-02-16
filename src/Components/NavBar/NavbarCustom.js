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
              <Nav.Link><Link to='/characters'>Characters</Link></Nav.Link>
              <Nav.Link><Link to='/locations'>Locations</Link></Nav.Link>
              <Nav.Link href="#pricing">Episodes</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>{children}</div>
    </>
  );
}