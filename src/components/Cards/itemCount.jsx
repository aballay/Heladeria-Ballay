import React from 'react';
import '../../assets/lib/sass/AddToCartWidgetCars.scss'

function ItemCount(props) {
    return ( <React.Fragment>
        <h1 id="unit-number" >{props.itemCount}</h1>
    </React.Fragment>  );
}

export default ItemCount;