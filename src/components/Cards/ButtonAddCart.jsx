import React from 'react';
import '../../assets/lib/sass/Cards.scss'

function ButtonAddCart(props) {
   
    return (
        <div className="container-button-add-cart">
            <button onClick={(event) => {
                props.addItemsToCart();
                props.resetItemCount();
            }} className="button-add-cart">
                <div className="text-btn-add-cart">
                 Agregar al carrito
                </div>
            </button>
        </div> 
    );
}

export default ButtonAddCart;

/*<button onClick={props.setSizeCart} className="button-add-cart">*/