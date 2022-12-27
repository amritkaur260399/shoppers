import React from "react";
import { youtube } from "../icons";
import { twitter } from "../icons";
import { linkdin } from "../icons";
import { instagram } from "../icons";
import { facebook } from "../icons";

const Footer = () => {
  return (
    <footer className="bg-black/50 bottom-0 shadow-inner">
       <div className="grid grid-cols-1 py-12 pb-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="text-left px-8">
          <h1 className="text-2xl font-bold"> Company</h1>
          <p className="py-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor consequatur cum quasi.</p>
          <h1><span>Phone:</span>+918882778844</h1>
          <h1><span>Email</span>demo@gmail.com</h1>

           </div>
        <div className="text-left px-8">
        <h1 className="text-2xl font-bold"> Resources</h1>
        <ul className="py-6 list-disc ">
          <li className="p-2">Shops and Personal Business </li>
          <li className="p-2" >Blog</li>
          <li className="p-2">Use cases</li>
          <li className="p-2">Online store</li>
          <li className="p-2">Nostrud exercitation</li>
        </ul>
        </div>
        <div className="text-left px-8">
        <h1 className="text-2xl font-bold"> Our Services</h1>
        <ul className="py-6 list-disc ">
          <li className="p-2">Online Shopping </li>
          <li className="p-2" >Cash On Delivery</li>
          <li className="p-2">Fast Delivery</li>
          <li className="p-2">Online Payments</li>
          <li className="p-2">Return</li>
        </ul>
        </div>

       
        <div className="text-left px-8">
        <h1 className="text-2xl font-bold">Join Our Newsletter</h1>
   <p className="py-8" >
    Lorem ipsum dolor sit amet consectetur adipisicing amet consectetur adipisicing..
   </p>

   <input  className="outline-none border-none h-12 w-52" type="text" placeholder="example@email.com "/>
   <button className="bg-yellow-600 py-3 px-3 text-white font-bold ">Subscribe</button>
        </div>

       

       </div>
       <div className="flex justify-between px-10">
        <div className="p-4 w-72">
       <p> @ Copright company. All Right Reserved Designed By Tailwind CSS </p>
        </div>
        <div className="p-4 ">
        <ul className="flex gap-2">
            <li><a href="https://www.youtube.com/">{youtube}</a></li>
            <li><a href="https://www.youtube.com/">{twitter}</a></li>
            <li><a href="https://www.youtube.com/">{facebook}</a></li>
            <li><a href="https://www.youtube.com/">{instagram}</a></li>
            <li><a href="https://www.youtube.com/">{linkdin}</a></li>
          
          </ul>
        </div>
       </div>
      </footer>
  );
};

export default Footer;
