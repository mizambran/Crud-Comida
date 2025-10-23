/* 
ass={} es la ruta
to={'/'} es donde va 
*/


import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router";


const Menu = () => {
  return (
    <>
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={'/'} className="fs-2">Crud Comida</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to={'/'} className={'nav-link'}>HOME</NavLink>
            <NavLink to={'/Login'} className={'nav-link'}>LOGIN</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}

export default Menu
