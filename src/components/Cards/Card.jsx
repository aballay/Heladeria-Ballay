import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { CartContext } from "../../js/CartContex";
import { CardContext } from "../../js/CardContext";
import ContainerAddToCart from "./ContainerAddToCart"

import "../../assets/lib/sass/Cards.scss";



function CardIndividual({ itemCard }) {

  const value = useContext(CartContext);
  const [itemCount, setItemCount] = useState(0);

  function addItem() {
    setItemCount(itemCount + 1);
    value.setItemCounts(itemCount + 1);

  }
  function quitItem() {
    if (itemCount > 0) {
      setItemCount(itemCount - 1)
      value.setItemCounts(itemCount - 1);
    }
  }

  function resetItemCount() {
    setItemCount(0);
  }


  return (
    <CardContext.Provider value={{itemCard,addItem,quitItem,resetItemCount,itemCount}}  >
      <Card className="card-individual-container" style={{ width: '30vh' }}>
        <Link className="item-navbar" style={{ textDecoration: 'none' }} to={`/item/${itemCard.id}`}>
          <Card.Img variant="top" src={itemCard.image} />
        </Link>
        <Card.Body id="card-body-container">
          <Card.Title>{itemCard.title}</Card.Title>
          <Card.Text className="cardText">
            {itemCard.desc}
          </Card.Text>
        </Card.Body>

        <ContainerAddToCart />
      </Card>
    </CardContext.Provider>
  );
}
/*addItemsToCart={addItemsToCart}*/

export default CardIndividual;