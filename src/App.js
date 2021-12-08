import './App.css';
import NavBar from './components/navbar/NavBar';
import React, {useState} from "react";
import ItemListContainer from './components/itemList/itemlListContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import { CartContext } from "./js/CartContex";



function App(props) {
  const [sizeCart,setSizeCart] = useState(0);
  const [itemsCount,setItemCounts] = useState(0);

      /*<div className="navbar-separator"></div>
      <CategoriesMenu />
      <Catalog  />
       <PokeApiExample />
      */

    function addItemsToCart() {
        setSizeCart(sizeCart + itemsCount);
        setItemCounts(0);
      }
    
  return ( 
    <BrowserRouter>
    
    <div className="App">
    <CartContext.Provider value={{sizeCart,addItemsToCart,setItemCounts}}>
      <NavBar  sizeCart={sizeCart}/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path='/category/:id' element={ <ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer addItemsToCart={addItemsToCart} setItemsCount={setItemCounts}  />} />
        <Route path="aboutUs" element={ <h1> NOsotros</h1>} />
        <Route path="contact" element={ <h1> Contacots</h1>} />
        <Route path="itemDetail" element={<ItemDetailContainer  />} />
      </Routes>
      </CartContext.Provider>
    </div>
    {/*<Route path='/category/:id' element={ <ItemListContainer setItemsCount={setItemCounts} addItemsToCart={addItemsToCart}/>  } />*/}
    </BrowserRouter>
   );
}

export default App;



