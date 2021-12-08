import React, {useContext} from 'react';
import '../../assets/lib/sass/Cards.scss';
import { CartContext } from "../../js/CartContex";

function ButtonAddCart(props) {
    const value = useContext(CartContext);
   
    return (
        <div className="container-button-add-cart">
            <button onClick={(event) => {
                value.addItemsToCart();
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