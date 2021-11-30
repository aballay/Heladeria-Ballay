import React, { Component } from 'react';
import Cards from '../Cards/Cards';
import '../../assets/lib/sass/ItemListContainer.scss'

class ItemListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        }
    
    }

    
    
    render() { 
        return (<div>
            <div className="row-separator-top">
                <div className="legend-row-separator-top">
                     Ofertas y promociones
                </div>
                
                
            </div>

            <Cards  />



           
        </div>  );
    }
}
 
export default ItemListContainer;