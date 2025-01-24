import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavbarCode() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={"/"}><Navbar.Brand >React-Bootstrap</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/men"}><Navbar.Brand>Men</Navbar.Brand></Link>
            <Link to={"/cart"}><Navbar.Brand>Cart</Navbar.Brand></Link>
            <Link to={"/signup"}><Navbar.Brand>Signup</Navbar.Brand></Link>
            <Link to={"/login"}><Navbar.Brand>Login</Navbar.Brand></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCode;