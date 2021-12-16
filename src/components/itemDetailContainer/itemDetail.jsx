import React,{useState} from 'react';
import ContainerAddToCart from '../Cards/ContainerAddToCart'

import '../../assets/lib/sass/itemDetail.scss';
function ItemDetail ({pItem}) {

    const [itemCount,setItemCount] = useState(0);
  
    function addItem() {
      setItemCount(itemCount + 1);
  
    }
    function quitItem() {
      if(itemCount>0){
        setItemCount(itemCount - 1)
      }
    }
  
    function resetItemCount()
    {
      setItemCount(0);
    }
   
    return ( <React.Fragment>
        <div>
            <ul>
                <li> <img src={pItem.image} alt={pItem.title} /> </li>
                <li> {pItem.title} </li>
                <li> ${pItem.price} </li>
                <li> {pItem.desc} </li>
                <ContainerAddToCart  itemCount={itemCount}  quitItem={quitItem} addItem={addItem} resetItemCount={resetItemCount}   />
            </ul>
        </div>
    </React.Fragment> );
}

export default ItemDetail ;

