import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../../../assets/lib/sass/CartWidget.scss'
import {CartContext} from "../../../js/CartContex";
import { useContext } from 'react';

function CartWidget () {
  const cartContext = useContext(CartContext);
  
    console.log("contexto en cartWidget",cartContext.cart)
    /*const renderNotificationCartShop = () => {
      return()
        }*/
      
    return (
         <div className="container-icon-cart-widget">
            <FontAwesomeIcon icon={faShoppingCart} id="icon-fa-shopping-basket" />
            <div id="c art-size-notificacion-container">
              <div className="cart-size-notification">{cartContext.cart.length}</div>
            </div>
        </div> 
    );
  }

export default CartWidget;