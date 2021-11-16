import './App.css';
import NavBar from './components/navbar/NavBar';
import Catalog from './components/catalog/catalog';
import CategoriesMenu from './components/CategoriesMenu/CategoriesMenu';
import React, { useState } from "react";
import ItemListContainer from './components/itemList/itemlListContainer';
import  PokeApiExample  from './components/Service/PokeApi';
import PokeApiExampleAxios from './components/Service/PokeApi';

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
    <div className="App">
      
      <NavBar  cartSize={this.state.sizeCart}/>
      <ItemListContainer />
     
      
    </div>
  );
  }
}
 


export default App;
