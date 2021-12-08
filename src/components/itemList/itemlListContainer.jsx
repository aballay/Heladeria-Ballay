import React from 'react';
import Cards from '../Cards/Cards';
import '../../assets/lib/sass/ItemListContainer.scss'




const ItemListContainer= (props) => {
   
    return (
        <React.Fragment>
            <div className="row-separator-top">
                <div className="legend-row-separator-top">
                     Ofertas y promociones
                </div>
                
            </div>
            <Cards />
        </React.Fragment>   

      );
}

export default ItemListContainer;