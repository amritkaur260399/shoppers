import React from "react";
import "./App.css";
import {Routes,Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Product from "./components/Product";
import Cart from "./components/Cart";
import SingleProduct from "./components/SingleProduct";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";


function App() {
  return (
    <div className="App">
    
<Routes>
  <Route  path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>} />
  <Route path="/products" element={<Product/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/singleproduct" element={<SingleProduct/>}/>
  <Route path="*" element={<ErrorPage/>}/>
</Routes>
   
    </div>
  );
}

export default App;
