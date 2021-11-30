import {Navbar, Nav,NavDropdown,Container} from 'react-bootstrap';
import '../../assets/lib/sass/NavBar.scss'
//import librerias font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIceCream } from '@fortawesome/free-solid-svg-icons'
import CartWidget from './cartwidget/cartwidget';
import { Link } from "react-router-dom";

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
                    <div className="logo-container">
                        
                    <Link style={{ textDecoration: 'none' }} to="/"><div className="logo-text"><FontAwesomeIcon icon={faIceCream} id="icon-fa-ice-cream" />Heladería Ballay</div></Link>
                         
                        </div>
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
    
                            <Link className="item-navbar" style={{ textDecoration: 'none' }} to="/aboutUs">Nosotros</Link>
                            <Link  className="item-navbar" style={{ textDecoration: 'none' }} to="/contact" >Contacto</Link>
                            
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
