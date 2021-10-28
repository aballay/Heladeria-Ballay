import {Navbar, Nav,NavDropdown,Container} from 'react-bootstrap';
import '../styles/NavBar.css'


function NavBar() {
    return (
      <div>
        <Navbar className="navbar-general"collapseOnSelect expand="lg"  variant="dark" >
            <Container className="navbar-container">
                <Navbar.Brand href="#home" className="logo-container">
                    <div className="logo-text">Heladeria Ballay</div> 
                    </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"/>
                    <Nav>
                        <Nav.Link href="#aboutUs">Nosotros</Nav.Link>
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#cart">Carrito</Nav.Link>
                        <Nav.Link href="#contactUs">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>
    );
  }
  
  export default NavBar;
  