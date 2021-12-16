import './App.css';
import NavBar from './components/navbar/NavBar';
import React, {useEffect, useState} from "react";
import ItemListContainer from './components/itemList/itemlListContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import CartShopContainer from "./components/Cart/cartShopContainer"
import { CartContext } from "./js/CartContex";



function App(props) {
  const [sizeCart,setSizeCart] = useState(0);
  const [itemsCount,setItemCounts] = useState(0);
  const [cart,setItemToCart] = useState([])
      /*<div className="navbar-separator"></div>
      <CategoriesMenu />
      <Catalog  />
       <PokeApiExample />
      */

    function deleteItemCart(pItemId){
      let indice = cart.findIndex((item) => item.id === pItemId);
      cart.splice(indice,1);
    }     
   
 
    function createItemCart(pItem,pCount){
      return {
        id: pItem.id,
        product:pItem.title,
        count:pCount,
        price:pItem.price,
        stock:pItem.stock
      }
    }
    function modifyItemCart(pActId,pNew)
    {
      let indice = cart.findIndex((item) => item.id === pActId);
      cart.splice(indice,1,pNew);
       // obtenemos el indice
      console.log("indice",indice)
    }

    function modifyUnityProduct(pIdItem,pNewCount){
      if(pNewCount > 0){
        let vItemCartAct= cart.find((item) => item.id === pIdItem);

        if(vItemCartAct != undefined){
          vItemCartAct.count = pNewCount;
          modifyItemCart(vItemCartAct.id,vItemCartAct)
        }else
        {
          alert("Error al modificar unidad de producto")
        }
        setItemToCart(cart);
      }

    }

    function addItemCart(pItem,pCount){
      if(pCount > 0){
        let vItemCartNew = createItemCart(pItem,pCount);
        let vItemCartAct= cart.find((item) => item.id === vItemCartNew.id);
        if(vItemCartAct != undefined){
          vItemCartNew.count = vItemCartNew.count + vItemCartAct.count;
          modifyItemCart(vItemCartAct.id,vItemCartNew)
        }else
        {
          cart.push(vItemCartNew);
        }
        setItemToCart(cart);
      }

      console.log(cart)
     
   }

   function resetCart()
   {
      setItemToCart([]);
   }
    
  return ( 
    <BrowserRouter>
    
    <div className="App">
    <CartContext.Provider value={{cart,setItemCounts,addItemCart,resetCart,modifyUnityProduct,deleteItemCart}}>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path='/category/:id' element={ <ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer   />} />
        <Route path="aboutUs" element={ <h1> NOsotros</h1>} />
        <Route path="contact" element={ <h1> Contacots</h1>} />
        <Route path="itemDetail" element={<ItemDetailContainer  />} />
        <Route path="cartShop" element = {<CartShopContainer />} />
      </Routes>
      </CartContext.Provider>
    </div>
    {/*<Route path='/category/:id' element={ <ItemListContainer setItemsCount={setItemCounts} />  } />*/}
    </BrowserRouter>
   );
}

export default App;



