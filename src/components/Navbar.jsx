import React ,{useState} from "react";

import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

function Navbar() {
const [active,setActive]=("");

const showMenu=()=>{
    setActive(!active)
}
const logo=( <svg
    height={30} width={40} fill="skyblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/></svg>)
    const listIcon=(<svg  height={30} width={40 } fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>)
  return (
    <div className=" fixed w-full text-white bg-black flex justify-between p-6">
      <div className="logo flex">
        {logo}
       <span className="text-2xl font-bold">SHOPPERS</span>
      </div>
      <nav className="">
        <div onClick={showMenu}>{listIcon}</div>
        {" "}
        <ul className= "hidden md:flex gap-8  uppercase  ">
          <Link to={"/"}>
            <li>Home</li>
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
        <MenuItems/>
      </nav>
    </div>
  );
}

export default Navbar;
