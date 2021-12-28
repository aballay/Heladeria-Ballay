import { useState, useContext, useEffect } from "react";
import CartShopList from "./cartShopList";
import { CartContext } from "../../js/CartContex"
import { Link } from "react-router-dom";
import "../../assets/lib/sass/CartShop.scss";
import { collection,  addDoc, getFirestore } from "firebase/firestore"

function ButtonBack() {
    return (
        <Link className="item-navbar" style={{ textDecoration: 'none' }} to="/" >
            <button>Volver</button>
        </Link>
    )
}

function SuccessShoping(props) {
    return (
        <>
            <div></div>
            <div className="ss-exit-container">
                <div className="ss-exit-body">
                    <h3>La compra se ha realizado con exito</h3>
                    <h5>Id de compra {props.idShop}</h5>
                    <h4>Gracias por confiar en nosotros!</h4>
                </div>

            </div>
        </>
    )
}


function PopupsPurchase({isShopping,idShop})
{
    return(
        <>
        {isShopping
                    ? <>
                        <h2>No hay elementos en el carrito.</h2>
                    </>
                    : <>
                        <SuccessShoping idShop={idShop}/>
                    </>
                }

        </>
    )
}

function ClientForm(props){

    const [email, setInputEmail] = useState("");
    const [email2, setInputEmail2] = useState("");
    const [name, setInputName] = useState("");
    const [phone, setInputPhone] = useState("");

    const finishShop = () =>{
        if(email !== "" && name !== "" && phone !== "" && email2 !== ""){

            if(email === email2){
                const order = {
                    buyer: {name:name, phone:phone, email:email},
                    items:props.cartOrder,
                    total:100
                  };
        
                  const db = getFirestore();
        
                  const vCollection = collection(db,"orders");
                  addDoc(vCollection, order).then(({id}) => {
                    props.setIdShop(id);
                  })
                  
                  props.makePurchase();
                  setInputEmail("");
                  setInputEmail2("");
                  setInputName("");
                  setInputPhone("");
            }else{
                alert("Los correos no coinciden");
                setInputEmail2("");
            }
        }
        

    }

    

    return (
      <div style={{ marginTop: "2%", textAlign: "center" }}>
        <h5>Rellene los campos con sus datos para finalizar la compra</h5>
        <div>Nombre:</div>
        <input value={name} onChange={(e) => setInputName(e.target.value)} />
        <div>eMail:</div>
        <input value={email} onChange={(e) => setInputEmail(e.target.value.toLowerCase())} />
        <div>Repita su eMail:</div>
        <input value={email2} onChange={(e) => setInputEmail2(e.target.value.toLowerCase())} />
        <div>Telefono:</div>
        <input value={phone} onChange={(e) => setInputPhone(e.target.value)} />.
        <div></div>
        <button onClick={() => finishShop()} >Comprar</button>

      </div>
    );
  }
  


function CartShopContainer() {
    const cartContext = useContext(CartContext);
    const [isShopping, setIsShopping] = useState(true);
    const [idShop,setIdShop] = useState(undefined);

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


    
    return (
        <div>
            <h1>Carrito</h1>
            
                {cartContext.cart.length > 0 
                    ? <>
                        <CartShopList/>
                        
                        <ClientForm setIdShop={setIdShop} makePurchase={makePurchase} cartOrder={cartContext.cart} />
                        
                        <ButtonBack />
                    </>
                    : <>

                    <PopupsPurchase idShop={idShop} isShopping={isShopping} />
                    <ButtonBack />
                        
                    </>
                }
            



        </div>);
}

export default CartShopContainer;