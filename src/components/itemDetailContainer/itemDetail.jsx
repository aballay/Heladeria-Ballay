import React from 'react';
import Card from "../Cards/Card"

import '../../assets/lib/sass/itemDetail.scss';
function ItemDetail ({pItem}) {

  const stylesCard = {
    display: 'flex',
    justifyContent:'center'
}
   
    return ( <React.Fragment>
        <div  style={stylesCard}>

          <Card isDetail={true} itemCard={pItem}></Card>
          
        </div>
    </React.Fragment> );
}

export default ItemDetail ;

