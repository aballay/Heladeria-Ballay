import React, {useState,useContext }from 'react';
import { Link } from "react-router-dom";
import {Card  } from "react-bootstrap";
import { CartContext } from "../../js/CartContex";
import ContainerAddToCart from "./ContainerAddToCart"

import "../../assets/lib/sass/Cards.scss";



function CardIndividual({imageSrc, title, description,stock,id }) {
  
  const value = useContext(CartContext);

  const [itemCount,setItemCount] = useState(0);
  
  function addItem() {
    setItemCount(itemCount + 1);
    value.setItemCounts(itemCount + 1);

  }
  function quitItem() {
    if(itemCount>0){
      setItemCount(itemCount - 1)
      value.setItemCounts(itemCount - 1);
    }
  }

  function resetItemCount()
  {
    setItemCount(0);
  }
  
 
  return (
    <Card className="card-individual-container"style={{ width: '30vh' }}>
         <Link className="item-navbar" style={{ textDecoration: 'none' }} to={`/item/${id}`}>
          <Card.Img variant="top" src={imageSrc} />
        </Link>
        <Card.Body id="card-body-container">
            <Card.Title>{title}</Card.Title>
            <Card.Text className="cardText">
            {description}
            </Card.Text>
        </Card.Body>
        
        <ContainerAddToCart resetItemCount={resetItemCount} addItem={addItem} quitItem={quitItem} itemCount={itemCount} />
        </Card>
  );
}
/*addItemsToCart={addItemsToCart}*/

export default CardIndividual;