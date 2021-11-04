import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../../../assets/lib/css/CartWidget.css'

function CartWidget (props) {

    const renderNotificationCartShop = () => {
        if (props.cartSize > 0) {
          return <div id="cart-size-notificacion-container">
                    <div className="cart-size-notification">{props.cartSize}</div>
                </div>
        } else {
          return <div></div>
        }
      }
    return (
         <div className="container-icon-cart-widget">
            <FontAwesomeIcon icon={faShoppingCart} id="icon-fa-shopping-basket" />
            {renderNotificationCartShop()}
        </div> 
    );
}

export default CartWidget;