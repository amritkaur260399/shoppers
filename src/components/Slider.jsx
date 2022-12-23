import { fromJSON } from "postcss";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import {AiOutlineVerticalRight,AiOutlineVerticalLeft} from"react-icons/ai"
const featuredProduct=[
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
  "/images/4.webp",
  "/images/5.webp",
]
let count=0;

const Slider = () => {
  const[currentIndex , setCurrentIndex]=useState(0)
  const handleleft=()=>{
   const productLeg=featuredProduct.length
    count=(currentIndex + productLeg-1)%productLeg
    setCurrentIndex(count)
  }
  const handleright=()=>{
    count=(count+1)%featuredProduct.length
    setCurrentIndex(count)
  }



setTimeout(() => {
  handleright()
}, 4000);


  return (
    <div className="banner pt-10  w-full bg-right bg-contain bg-no-repeat bg-slate-100    text-center md:text-start">
     <div className="w-full h-[80vh]">
      
      <img  className="w-full h-[80vh]"
      src={featuredProduct[currentIndex]}/></div> 
      <div className="absolute top-1/2 z-10 px-4 flex w-full justify-between">
        <button 
        onClick={handleleft}
        ><AiOutlineVerticalRight/></button>
        <button
         onClick={handleright}
        ><AiOutlineVerticalLeft/></button>
      </div>
<div className="absolute top-20 left-10 z-20">    

  <h1 className="sm:text-4xl text-3xl text-slate-700 font-semibold py-8">
        Best Models For Summer 2022
      </h1>
      <h1 className=" text-6xl sm:text-7xl text-slate-700 font-extrabold">
        looks hot with<br></br> 2022 style
      </h1>
      <Link to="/products">
        <button className=" mt-16 bg-yellow-400 text-slate-800 hover:bg-slate-800 hover:text-white px-5 py-3 text-xl font-semibold transition-colors duration-300">
          SHOP NOW
        </button>
      </Link></div>
    </div>
  );
};

export default Slider;
