import React, { Component,useState,setState } from 'react';

import {Card, ListGroup, ListGroupItem } from "react-bootstrap";
import AddToCartWidget from "./AddToCart";
import ButtonAddCart from "./ButtonAddCart"

import "../../assets/lib/css/Cards.css";



function CardIndividual({handleAddToCart, imageSrc, title, description,stock }) {
  const [itemCount, setCount] = useState(0);
  
  const handleAddAmountUnit = () => {
    if(itemCount < stock){
        setCount(itemCount + 1);           
    }
  }
  const handleQuitAmountUnit = () => {
    if(itemCount > 0){
        setCount(itemCount - 1);           
    }
  }
  
  return (
    <Card className="card-individual-container"style={{ width: '30vh' }}>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body id="card-body-container">
            <Card.Title>{title}</Card.Title>
            <Card.Text className="cardText">
            {description}
            </Card.Text>
        </Card.Body>
       
        <Card.Body>
          <AddToCartWidget amountUnit={itemCount} handleAddAmountUnit={handleAddAmountUnit} handleQuitAmountUnit={handleQuitAmountUnit}  />
          
        </Card.Body>
        <ButtonAddCart  />
        </Card>
  );
}


export default CardIndividual;