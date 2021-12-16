import React, {useContext} from 'react';
import '../../assets/lib/sass/Cards.scss';
import { CartContext } from "../../js/CartContex";
import { CardContext } from "../../js/CardContext";

function ButtonAddCart(props) {
    const value = useContext(CartContext);
    const cardContext = useContext(CardContext)
   
    return (
        <div className="container-button-add-cart">
            <button onClick={(event) => {
                cardContext.resetItemCount();
                value.addItemCart(cardContext.itemCard,cardContext.itemCount);
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