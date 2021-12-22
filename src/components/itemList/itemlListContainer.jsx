import React from 'react';
import Cards from '../Cards/Cards';
import '../../assets/lib/sass/ItemListContainer.scss'
import { useParams } from 'react-router';


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const ItemListContainer= (props) => {

    const {categoryId} = useParams();
    return (
        <React.Fragment>
            <div className="row-separator-top">
                <div className="legend-row-separator-top">
                     Ofertas y promociones
                </div>

                {
                    categoryId !== undefined ?
                    <h1>
                        {capitalizeFirstLetter(categoryId)}
                    </h1> 
                    :
                    <div>

                    </div>
                }
                
            </div>
            <Cards categoryId={categoryId} />
        </React.Fragment>   

      );
}

export default ItemListContainer;