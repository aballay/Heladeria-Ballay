import React from 'react';
import AddToCartWidget from './AddToCart';
import ButtonAddCart from './ButtonAddCart';
import {Card} from "react-bootstrap";
function ContainerAddToCart(props) {

 
  
    return ( 
    <React.Fragment>
        <Card.Body>
        
          <AddToCartWidget />
          
        </Card.Body>
        <ButtonAddCart />

    </React.Fragment> );
}

export default ContainerAddToCart;