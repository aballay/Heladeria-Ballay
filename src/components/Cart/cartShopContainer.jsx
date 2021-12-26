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
    const [name, setInputName] = useState("");
    const [phone, setInputPhone] = useState("");

    const finishShop = () =>{
        if(email !== "" && name !== "" && phone !== ""){
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
              setInputName("");
              setInputPhone("");
        }
        

    }

    

    return (
      <div style={{ marginTop: "10%", textAlign: "center" }}>
        <div>Nombre:</div>
        <input value={name} onChange={(e) => setInputName(e.target.value)} />
        <div>Mail:</div>
        <input value={email} onChange={(e) => setInputEmail(e.target.value)} />
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