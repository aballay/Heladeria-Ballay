import './App.css';
import NavBar from './components/navbar/NavBar';
import React, {useState} from "react";
import ItemListContainer from './components/itemList/itemlListContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import ItemCount from './components/Cards/itemCount';


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
    
      console.log("itemsCount",itemsCount)
      console.log("sizeCart",sizeCart)
  return ( 
    <BrowserRouter>
    <div className="App">
      <NavBar  sizeCart={sizeCart}/>
        <Routes>
          <Route path="/" element={<ItemListContainer setItemsCount={setItemCounts}  addItemsToCart={addItemsToCart}/>} />
          <Route path='/category/:id' element={ <ItemListContainer setItemsCount={setItemCounts} addItemsToCart={addItemsToCart}/>  } />
          <Route path='/item/:id' element={<ItemDetailContainer addItemsToCart={addItemsToCart} setItemsCount={setItemCounts}  />} />
          <Route path="aboutUs" element={ <h1> NOsotros</h1>} />
          <Route path="contact" element={ <h1> Contacots</h1>} />
          <Route path="itemDetail" element={<ItemDetailContainer  />} />
          
        </Routes>
    </div>
    </BrowserRouter>
   );
}

export default App;



