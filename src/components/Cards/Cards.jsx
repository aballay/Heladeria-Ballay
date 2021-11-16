import React, {useEffect,useState} from "react";
import CardIndividual from "./Card";
import { CardGroup } from "react-bootstrap";


import "../../assets/lib/css/Cards.css";

const maxColumns = 4;
let contador = 0;
const cardsData = [
  {
    id: 1,
    title: "Promo Bariloche",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
   desc: "Balde 3 litros + 6 chocolates bariloche",
   stock:100,
  },
  {
    id: 2,
    title: "Promo Suiza",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
    desc: "Balde de 3 litros + 6 bombones suizos",
    stock:50,
    
  },
  {
    id: 3,
    title: "Promo Cafe",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
    desc: "6 Bombones suizos + 6 Almendrados + 6 bombones de Cafe",
    stock:10,
    
  },
  {
    id: 4,
    title: "Promo Merienda",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
    desc: "Torata de manzana  + Torta Helada + Cafe a Eleccion",
    stock:45,
    
  },
  {
    id: 5,
    title: "Promo Bariloche",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
   desc: "Balde 3 litros + 6 chocolates bariloche",
   stock:36,
  },
  {
    id: 6,
    title: "Promo Suiza",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
    desc: "Balde de 3 litros + 6 bombones suizos",
    stock:20,
    
  },
  {
    id: 7,
    title: "Promo Cafe",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
    desc: "6 Bombones suizos + 6 Almendrados + 6 bombones de Cafe",
    stock:20,
    
  },
  {
    id: 8,
    title: "Promo Merienda",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
    desc: "Torata de manzana  + Torta Helada + Cafe a Eleccion",
    stock:15,
    
  },
  {
    id: 1,
    title: "Promo Bariloche",
    image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
   desc: "Balde 3 litros + 6 chocolates bariloche",
   stock:10,
  },
];

/**/

function Cards(props) {

  const [cards,setCards] = useState([]);
  
  useEffect(()=>{
      new Promise((resp,reject) => setTimeout(resp(cardsData),10000))
      .then(data => setCards(data))
  },[])
  
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
        <CardGroup className="card-group-containter-dinamyc">
            {
              cards.map(({title,image,desc,id,stock}) => (
                <div key={id}>
                <CardIndividual className="card-container-component"
                title={title} imageSrc={image} description={desc} id={id} stock={stock} />
                </div>
              
            ))
             
            }
        </CardGroup>
     
    </div>
  );
}

export default Cards;