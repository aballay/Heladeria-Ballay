import React from 'react';
import AddToCartWidget from './AddToCart';
import ButtonAddCart from './ButtonAddCart';
import {Card} from "react-bootstrap";

function ContainerAddToCart(props) {

  
  
    return ( 
    <React.Fragment>
        <Card.Body>
        
          <AddToCartWidget  quitItem={props.quitItem} addItem={props.addItem} itemCount={props.itemCount} />
          
        </Card.Body>
        <ButtonAddCart resetItemCount={props.resetItemCount} addItemsToCart={props.addItemsToCart} />

    </React.Fragment> );
}

export default ContainerAddToCart;