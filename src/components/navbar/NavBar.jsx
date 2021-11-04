import {Navbar, Nav,NavDropdown,Container} from 'react-bootstrap';
import '../../assets/lib/css/NavBar.css'
//import librerias font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIceCream } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './cartwidget/cartwidget';

import React, {Component, useState } from "react";
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
        
        
    }
    
    render() { 
        return ( <div>
            <Navbar className="navbar-general"collapseOnSelect expand="lg"  variant="dark" >
                <Container className="navbar-container">
                    <Navbar.Brand href="#home" className="logo-container">
                         
                        <div className="logo-text"><FontAwesomeIcon icon={faIceCream} id="icon-fa-ice-cream" />Heladería Ballay</div> 
                        </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"/>
                            <Nav>
                                <Nav>
                                    <NavDropdown
                                    id="features-drop-down"
                                    title="Productos"
                                    menuVariant="dark"
                                    >
                                        <NavDropdown.Item className="item-feature" href="#catalog/mayoristas" >Mayoristas</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item  className="item-feature"  href="#catalog/minoristas">Minoristas</NavDropdown.Item>
                                    </NavDropdown>
                             </Nav>
    
                            <Nav.Link href="#aboutUs">Nosotros</Nav.Link>
                            <Nav.Link href="#contactUs">Contacto</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                    <div className="container-cart-widget">
                        <CartWidget cartSize={this.props.cartSize}></CartWidget >
                    </div>
                    
                </Container>
            </Navbar>
          </div> );
    }
}
 
export default NavBar ;
