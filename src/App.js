import './App.css';
import NavBar from './components/navbar/NavBar';
import React, { useState } from "react";
import ItemListContainer from './components/itemList/itemlListContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sizeCart: 0
      }
  }
 /*<div className="navbar-separator"></div>
      <CategoriesMenu />
      <Catalog  />
       <PokeApiExample />
      */


  render() { 
    return ( 
      <BrowserRouter>
    <div className="App">
      <NavBar  cartSize={this.state.sizeCart}/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="aboutUs" element={ <h1> NOsotros</h1>} />
          <Route path="contact" element={ <h1> Contacots</h1>} />
          <Route path="itemDetail" element={<ItemDetailContainer />} />
          
        </Routes>
    </div>
    </BrowserRouter>
  );
  }
}
 


export default App;
