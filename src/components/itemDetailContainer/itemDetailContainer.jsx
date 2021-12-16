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
            .then((res) => {
                let resFilter = res.find(x => x.id === parseInt(id));
                setItemDetail(resFilter)
            }).catch((bError) => {
                alert(bError)
            })
    }, [])


    return (<React.Fragment>
        <div className="item-detail-container">
         <ItemDetail pItem={itemDetail} />
        </div>
    </React.Fragment>);
}

export default ItemDetailContainer;
