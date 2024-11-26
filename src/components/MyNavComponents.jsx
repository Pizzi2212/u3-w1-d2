import { NavDropdown, Navbar, Container, Nav } from 'react-bootstrap'

const CustomNavbar = (props) => {
  console.log('PROPS DELLA NAVBAR', props)
  return (
    <Navbar
      className="fixed-top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid={props.isFluid}>
        <Navbar.Brand href="#home">Max - {props.subtitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Genres" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">History</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Scifi</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar