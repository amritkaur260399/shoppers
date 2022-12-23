import React from 'react'
import { Link } from "react-router-dom";

function MenuItems({showMenu ,active}) {
    const cross=(         <svg height={30} width={40} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>)
  return (
   
    <ul className={active? '  flex-col  flex items-center right-0   gap-4 text-xl bg-black/50 p-8 fixed  md:hidden':"hidden"}>
<li onClick={showMenu}>{cross}</li>
    <Link to={"/"}>
      <li >Home</li>
    </Link>
    <Link to={"/about"}>
      <li>About</li>
    </Link>
    <Link to={"/contact"}>
      <li>Contact</li>
    </Link>
    <Link to={"/products"}>
      <li>Product</li>
    </Link>
  </ul>

  )
}

export default MenuItems