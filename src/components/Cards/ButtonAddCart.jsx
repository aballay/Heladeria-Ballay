import React, { Component } from 'react';
import '../../assets/lib/css/Cards.css'

function ButtonAddCart(props) {
    return (
        <div className="container-button-add-cart">
            <button onClick={() => props.handlerAddToCartUnits} className="button-add-cart">
                <div className="text-btn-add-cart">
                 Agregar al carrito
                </div>
            </button>
        </div> 
    );
}

export default ButtonAddCart;