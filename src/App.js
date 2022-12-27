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
import Navbar  from './components/Navbar'
import Footer from "./components/Footer";
import TradionalDress from "./components/TradionalDress";
import WestrenDress from "./components/WestrenDress";
import Heels from "./components/Heels";
import Shoes from "./components/Shoes";

function App() {
  return (
    <div className="App">
    
  <Navbar/>
<Routes>
  <Route  path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>} />
  <Route path="/products" element={<Product/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/tradionaldress" element={<TradionalDress/>}/>
  <Route path="/westrendress" element={<WestrenDress/>}/>
  <Route path="/heels" element={<Heels/>}/>
  <Route path="/shoes" element={<Shoes/>}/>
 

  <Route path="/cart" element={<Cart/>}/>
  <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
  <Route path="*" element={<ErrorPage/>}/>
</Routes>
<Footer/>
   
    </div>
  );
}

export default App;
