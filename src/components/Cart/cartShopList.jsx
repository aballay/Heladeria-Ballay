import { useEffect, useState, useContext} from "react";
import { CartContext } from "../../js/CartContex";
function CartShopList(props) {
    const cartContext = useContext(CartContext);
    const itemsCart = cartContext.cart;
    const [totalCost,setTotalCost] = useState(0);

    const stylesChangeUnit = {
        display: 'flex',
        justifyContent:'center'
    }

    const calcTotalCost = () => {
        let finalCost = 0;
        let costProducts = itemsCart.map(function(item) {
            return item.price * item.count;
        });
        for (let i = 0; i < costProducts.length; i++) {
            finalCost += costProducts[i];
        }
       return finalCost;
    }

    useEffect(() => {
        const calcTotalCost = () => {
            let finalCost = 0;
            let costProducts = itemsCart.map(function(item) {
                return item.price * item.count;
            });
            for (let i = 0; i < costProducts.length; i++) {
                finalCost += costProducts[i];
            }
           return finalCost;
        }
        if(itemsCart.length > 0){
            setTotalCost(calcTotalCost());
        }
    },[itemsCart])

    
    // param : 1 = suma
     //        -1 = resta;  
    const modifyUnity = (pId,param,stock) => {
        let mElement = document.getElementById(`dvCount${pId}`);
        let mValue = parseInt(mElement.innerText);
        if(param === -1){
            if(mValue > 1)
            {
                document.getElementById(`dvCount${pId}`).innerText = mValue + param;
                cartContext.modifyUnityProduct(pId,mValue + param);
            }
        }else{
            if(mValue + 1 <= stock ){
                document.getElementById(`dvCount${pId}`).innerText = mValue + param;
                cartContext.modifyUnityProduct(pId,mValue + param);
            }
        }
        setTotalCost(calcTotalCost());
    }
    const DeleteUnity = (pId) => {
        cartContext.deleteItemCart(pId);
        setTotalCost(calcTotalCost());
    }

   
    return (
        <div>
            <table width="100%">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        cartContext.cart.map((item) => (
                            
                            <tr key={item.id}>
                                <td>{item.product}</td>
                                <td style={stylesChangeUnit}>
                                    <button onClick={() => {
                                        modifyUnity(item.id,-1,item.stock);
                                    }}>-</button>
                                    <div id={"dvCount"+item.id} >
                                        {item.count}
                                    </div>
                                    <button onClick={() => {
                                         modifyUnity(item.id,+1,item.stock);
                                    }}>+</button>
                                    </td>
                                <td>{item.price}</td>
                                <td><button onClick={() => {
                                         DeleteUnity(item.id)
                                    }}  >X</button></td>
                            </tr>
                        ))
                    }

                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>{totalCost}</td>
                    </tr>
                </tfoot>
            </table>

        </div>
    );
}
export default CartShopList;

