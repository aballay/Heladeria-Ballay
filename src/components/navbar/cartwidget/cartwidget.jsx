import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../../../assets/lib/sass/CartWidget.scss'

function CartWidget (props) {

    const renderNotificationCartShop = () => {
      return(<div id="c art-size-notificacion-container">
      <div className="cart-size-notification">{props.sizeCart}</div>
      </div>)
        }
      
    return (
         <div className="container-icon-cart-widget">
            <FontAwesomeIcon icon={faShoppingCart} id="icon-fa-shopping-basket" />
            {renderNotificationCartShop()}
        </div> 
    );
  }

export default CartWidget;