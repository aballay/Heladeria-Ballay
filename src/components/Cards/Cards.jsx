import React, {useContext,useEffect,useState} from "react";
import CardIndividual from "./Card";
import { CardGroup } from "react-bootstrap";
import { ProductsContext } from "../../js/ProductsContext";

import "../../assets/lib/css/Cards.css";

function Cards(props) {
  const productsContext = useContext(ProductsContext);
  const [cards,setCards] = useState(productsContext.productFirebase);
  
  useEffect(()=>{
    const handPromise = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(productsContext.productFirebase);
        reject('Algo Fallo');
      }, 10);
    })
    handPromise
    .then( (res) => {
      if(props.categoryId !== undefined){
        let resFilter = res.filter((item) => item.category === props.categoryId);
        console.log(resFilter)
        if(resFilter){
          setCards(resFilter);
        }else{
          setCards(res)
        }
      }else{
        setCards(res)
      }
    } )
    .catch( (bError) => {
      alert( bError)
    })
  },[productsContext.productFirebase,props.categoryId])

  
  return (
    
    <div className="container d-flex justify-content-center align-items-center h-100">
      
        <CardGroup className="card-group-containter-dinamyc">
            {
              cards.length !== undefined 
              ? 
                  cards.map((card) => (
                  <div key={card.id}>
                  <CardIndividual  className="card-container-component" 
                    itemCard={card}/>
                  </div>
               ))
              
              : 
              <div key={cards.id}>
                  <CardIndividual  className="card-container-component" 
                    itemCard={cards}/>
                  </div>
            
            }
        </CardGroup>
     
    </div>
  );
}

export default Cards;