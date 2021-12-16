import React, {useEffect,useState} from "react";
import CardIndividual from "./Card";
import { CardGroup } from "react-bootstrap";

import "../../assets/lib/css/Cards.css";

const cardsData = [
  {
    id: 1,
    title: "Pote 3 Litros",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
   desc: "Balde 3 litros + 6 chocolates bariloche",
   category:"mayorista",
   stock:100,
   price:400
  },
  {
    id: 2,
    title: "Pote 10 Litros",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
    desc: "Balde de 3 litros + 6 bombones suizos",
    category:"mayorista",
    stock:50,
    price:400
  },
  {
    id: 3,
    title: "Caja Bombon",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
    desc: "6 Bombones suizos + 6 Almendrados + 6 bombones de Cafe",
    category:"mayorista",
    stock:10,
    price:400
  },
  {
    id: 4,
    title: "Caja Alfajor",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
    desc: "Torata de manzana  + Torta Helada + Cafe a Eleccion",
    category:"mayorista",
    stock:45,
    price:400
  },
  {
    id: 5,
    title: "Promo Bariloche",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
   desc: "Balde 3 litros + 6 chocolates bariloche",
   category:"minorista",
   stock:36,
   price:750
  },
  {
    id: 6,
    title: "Promo Suiza",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
    desc: "Balde de 3 litros + 6 bombones suizos",
    category:"minorista",
    stock:20,
    price:750
  },
  {
    id: 7,
    title: "Promo Cafe",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
    desc: "6 Bombones suizos + 6 Almendrados + 6 bombones de Cafe",
    category:"minorista",
    stock:20,
    price:750
  },
  {
    id: 8,
    title: "Promo Merienda",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
    desc: "Torata de manzana  + Torta Helada + Cafe a Eleccion",
    category:"minorista",
    stock:15,
    price:750
  },
  {
    id: 9,
    title: "Promo Bariloche",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
   desc: "Balde 3 litros + 6 chocolates bariloche",
   category:"minorista",
   stock:10,
   price:750
  },
];

/**/

function Cards(props) {

  const [cards,setCards] = useState([]);
  
  
  
  useEffect(()=>{
    const handPromise = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(cardsData);
        reject('Algo Fallo');
      }, 2000);
    })
    handPromise
    .then( (res) => {
      setCards(res)
    } )
    .catch( (bError) => {
      alert( bError)
    })
  },[])

  
  return (

    
    <div className="container d-flex justify-content-center align-items-center h-100">
      
        <CardGroup className="card-group-containter-dinamyc">
            {
              cards.map((card) => (
                <div key={card.id}>
                    <CardIndividual  className="card-container-component" 
                      itemCard={card}/>
                </div>
            ))
             
            }
        </CardGroup>
     
    </div>
  );
}

export default Cards;