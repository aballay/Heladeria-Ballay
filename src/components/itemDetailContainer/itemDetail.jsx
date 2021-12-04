import React,{useState} from 'react';
import ContainerAddToCart from '../Cards/ContainerAddToCart'

import '../../assets/lib/sass/itemDetail.scss';
function ItemDetail (props) {

    const [itemCount,setItemCount] = useState(0);
  
    function addItem() {
      setItemCount(itemCount + 1);
      props.setItemsCount(itemCount + 1);
  
    }
    function quitItem() {
      if(itemCount>0){
        setItemCount(itemCount - 1)
        props.setItemsCount(itemCount - 1);
      }
    }
  
    function resetItemCount()
    {
      setItemCount(0);
    }
   
    return ( <React.Fragment>
        <div>
            <ul>
                <li> <img src={props.image} alt={props.title} /> </li>
                <li> {props.title} </li>
                <li> ${props.price} </li>
                <li> {props.desc} </li>
                <ContainerAddToCart addItemsToCart={props.addItemsToCart} itemCount={itemCount}  quitItem={quitItem} addItem={addItem} resetItemCount={resetItemCount}   />
            </ul>
        </div>
    </React.Fragment> );
}

export default ItemDetail ;

