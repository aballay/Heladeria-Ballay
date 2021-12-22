import { useState, useContext, useEffect } from "react";
import CartShopList from "./cartShopList";
import { CartContext } from "../../js/CartContex"
import { Link } from "react-router-dom";
import "../../assets/lib/sass/CartShop.scss";

function ButtonBack() {
    return (
        <Link className="item-navbar" style={{ textDecoration: 'none' }} to="/" >
            <button>Volver</button>
        </Link>
    )
}

function SuccessShoping() {
    return (
        <>
            <div></div>
            <div className="ss-exit-container">
                <div className="ss-exit-body">
                    <h3>La compra se ha realizado con exito</h3>
                    <h4>Gracias por confiar en nosotros!</h4>
                </div>

            </div>
        </>
    )
}


function PopupsPurchase({isShopping})
{
    console.log("isSHopping",isShopping)
    return(
        <>
        {isShopping
                    ? <>
                        <h2>No hay elementos en el carrito.</h2>
                    </>
                    : <>
                        <SuccessShoping />
                    </>
                }

        </>
    )
}


function CartShopContainer() {
    const cartContext = useContext(CartContext);
    const [isShopping, setIsShopping] = useState(true);

    const makePurchase = () => {
        setIsShopping(false);

    }

    useEffect(() => {
        setIsShopping(true)
    },[])

    useEffect(() => {
        if(!isShopping)
        cartContext.resetCart();
    },[isShopping,cartContext])


    
    console.log(cartContext);
    return (
        <div>
            <h1>Carrito</h1>
            
                {cartContext.cart.length > 0 
                    ? <>
                        <CartShopList/>
                        <button onClick={makePurchase} >Comprar</button>
                        <ButtonBack />
                    </>
                    : <>

                    <PopupsPurchase isShopping={isShopping} />
                    <ButtonBack />
                        
                    </>
                }
            



        </div>);
}

export default CartShopContainer;