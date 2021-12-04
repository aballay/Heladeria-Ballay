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
        return (<React.Fragment>
            <div className="row-separator-top">
                <div className="legend-row-separator-top">
                     Ofertas y promociones
                </div>
                
            </div>
            <Cards addItemsToCart={this.props.addItemsToCart} setItemsCount={this.props.setItemsCount} />
        </React.Fragment>
         );
    }
}
 
export default ItemListContainer;