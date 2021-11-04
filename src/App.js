import './App.css';
import NavBar from './components/navbar/NavBar';
import Catalog from './components/catalog/catalog';
import React, { useState } from "react";
import ItemListContainer from './components/itemList/itemlListContainer';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sizeCart: 0
      }
  }
  handleCountCartShop = () => {
    this.setState({sizeCart: this.state.sizeCart + 1});
}
handleCountCartShopDown = () => {
  if(this.state.sizeCart > 0 ){
    this.setState({sizeCart: this.state.sizeCart - 1});
  }
  
}
  render() { 
    return ( 
    <div className="App">
      <NavBar  cartSize={this.state.sizeCart}/>
      <Catalog  />
      <ItemListContainer countCartShop={this.handleCountCartShop} countCartShopDown={this.handleCountCartShopDown} />
    </div>
  );
  }
}
 


export default App;
