import './App.css';
import NavBar from './components/navbar/NavBar';
import React, { useEffect, useState } from "react";
import ItemListContainer from './components/itemList/itemlListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import CartShopContainer from "./components/Cart/cartShopContainer"
import { CartContext } from "./js/CartContex";
import { ProductsContext } from "./js/ProductsContext";
import getItemsDetail from './components/Service/itemService';

function App(props) {
  const [cart, setItemToCart] = useState([]);
  const [productFirebase, setProductFirebase] = useState([]);
  const [cartSize, setCartSize] = useState(0);
  
  


  // Get product from firebase 
  /*
    const [product,setProduct] = useState([]);
  
    useEffect(() => {
      const db = getFirestore();
  
      const product1 = doc(db,"products","SK0j3yhHW2oTbX1W7Jvk");
      getDoc(product1).then((snapshot) => {
        if(snapshot.exists()){
          setProduct({ ...snapshot.data(),id: snapshot.id})
        }
      })
    },[])
  
    console.log(product)*/

  // get collection from firebase


  useEffect(() => {
    getItemsDetail.then((snapshot) => {
      setProductFirebase(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    })
    
  }, [])

  function deleteItemCart(pItemId) {
    let indice = cart.findIndex((item) => item.id === pItemId);
    cart.splice(indice, 1);
    calcCartSize();
  }

  /*function addProduct(){
    const order = {
      buyer: {name:"angel", phone:"1111", email:"a@a.com"},
      items:[{name:"Bici",price:"100"}],
      total:100
    };
    
    const product =  {
      title: "Caja Alfajor",
      image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
      desc: "Torata de manzana  + Torta Helada + Cafe a Eleccion",
      category:"mayorista",
      stock:45,
      price:400
    };

    const db = getFirestore();

    const vCollection = collection(db,"products");
    addDoc(vCollection, product).then(({id}) => {
      console.log("id",id)
    })
    console.log("se agrega producto")
  }*/

  function createItemCart(pItem, pCount) {
    return {
      id: pItem.id,
      product: pItem.title,
      count: pCount,
      price: pItem.price,
      stock: pItem.stock
    }
  }
  function modifyItemCart(pActId, pNew) {
    let indice = cart.findIndex((item) => item.id === pActId);
    cart.splice(indice, 1, pNew);
    calcCartSize();
    // obtenemos el indice
  }

  function calcCartSize(){
    let vSizeCart = 0;
    let vSizeCartArr = cart.map(function (item) {
      return item.count;
    });
    for (let i = 0; i < vSizeCartArr.length; i++) {
      vSizeCart = vSizeCart + vSizeCartArr[i];
    }
    setCartSize(vSizeCart)
  }

  function modifyUnityProduct(pIdItem, pNewCount) {
    if (pNewCount > 0) {
      let vItemCartAct = cart.find((item) => item.id === pIdItem);

      if (vItemCartAct !== undefined) {
        vItemCartAct.count = pNewCount;
        modifyItemCart(vItemCartAct.id, vItemCartAct)
      } else {
        alert("Error al modificar unidad de producto")
      }
      setItemToCart(cart);
      calcCartSize();
    }
  }

  function addItemCart(pItem, pCount) {
    if (pCount > 0) {
      let vItemCartNew = createItemCart(pItem, pCount);
      let vItemCartAct = cart.find((item) => item.id === vItemCartNew.id);
      if (vItemCartAct !== undefined) {
        vItemCartNew.count = vItemCartNew.count + vItemCartAct.count;
        modifyItemCart(vItemCartAct.id, vItemCartNew)
      } else {
        cart.push(vItemCartNew);
      }
      setItemToCart(cart);
      calcCartSize();
    }
  }

  function resetCart() {
    setItemToCart([]);
    calcCartSize();
  }
  /*
  function addProductToDb(){
    const product =  {
      title: "Torta helada",
      image: 'https://raw.githubusercontent.com/FaztWeb/react-cards-bootstrap/main/src/assets/image3.jpg',
      desc: "Torta helada selva negra",
      category:"minorsita",
      stock:45,
      price:300
    };

    const db = getFirestore();

    const vCollection = collection(db,"products");
    addDoc(vCollection, product).then(({id}) => {
      console.log("id",id)
    })
  }*/

  return (
    <BrowserRouter>

      <div className="App">
        <CartContext.Provider value={{ cart, addItemCart, resetCart, modifyUnityProduct, deleteItemCart }}>
          <ProductsContext.Provider value={{ productFirebase }} >
            <NavBar cartSize={cartSize} />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path="aboutUs" element={<h1> NOsotros</h1>} />
              <Route path="contact" element={<h1> Contacots</h1>} />
              <Route path="itemDetail" element={<ItemDetailContainer />} />
              <Route path="cartShop" element={<CartShopContainer />} />
            </Routes>
            
          </ProductsContext.Provider>
        </CartContext.Provider>
        
      </div>
    </BrowserRouter>
  );
}

export default App;



