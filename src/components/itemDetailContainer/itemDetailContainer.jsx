import React, { useState, useEffect } from 'react';
import getItemDetail from '../Service/itemService';
import ItemDetail from './itemDetail';
import '../../assets/lib/sass/itemDetail.scss';
import { useParams } from 'react-router';

function ItemDetailContainer(props) {
    const itemDefault = {
        id: 0,
        title: "No Disponible",
        image: '',
        desc: "No Disponible",
        price: 0,
        stock: 0,
    }

    const [itemDetail, setItemDetail] = useState(itemDefault);
    const { id } = useParams();

    
    useEffect(() => {
        getItemDetail
        .then((snapshot) => {
            let res = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
            let resFilter= res.find( x => x.id === id)
            setItemDetail(resFilter)
          })
           
    }, [id])


    return (<React.Fragment>
        <div className="item-detail-container">
         <ItemDetail pItem={itemDetail} />
        </div>
    </React.Fragment>);
}

export default ItemDetailContainer;
