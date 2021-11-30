import React, { useState, useEffect } from 'react';
import getItemDetail from '../Service/itemService';
import ItemDetail from './itemDetail';

function ItemDetailContainer() {
    const itemDefault = {
        id: 0,
        title: "No Disponible",
        image: '',
       desc: "No Disponible",
       price: 0,
       stock:0,
      }
    const [itemDetail,setItemDetail] = useState(itemDefault);

    useEffect(() => {
        getItemDetail
        .then((res) => {
            console.log("respuesta del mock: ", res);
            setItemDetail(res);
        }).catch( (bError) => {
          alert(bError)
        })
    },[])

    return ( <React.Fragment>
        <div className="item-detail-container">
            <ItemDetail image={itemDetail.image} title={itemDetail.title} price={itemDetail.price} desc={itemDetail.desc}  />
        </div>
    </React.Fragment> );
}

export default ItemDetailContainer;
