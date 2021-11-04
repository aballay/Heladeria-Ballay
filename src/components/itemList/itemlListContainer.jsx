import React, { Component } from 'react';

class ItemListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        }
    
    }
    handleAddToCart = () => {
        this.props.countCartShop();            
    }
    handleQuitToCart = () => {
        this.props.countCartShopDown();            
    }
    render() { 
        return (<div>
            <h1>Agregar al carrito</h1>
            <button onClick={this.handleAddToCart}> COMPRAR </button>
            <button onClick={this.handleQuitToCart}> DESCOMPRAR </button>
        </div>  );
    }
}
 
export default ItemListContainer;