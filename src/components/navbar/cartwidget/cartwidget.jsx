import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../../../assets/lib/sass/CartWidget.scss'


function CartWidget (props) {
 
    return (
         <div className="container-icon-cart-widget">
            <FontAwesomeIcon icon={faShoppingCart} id="icon-fa-shopping-basket" />
            <div id="c art-size-notificacion-container">
              <div id="cartSize" className="cart-size-notification">{props.cartSize}</div>
            </div>
        </div> 
    );
  }

export default CartWidget;