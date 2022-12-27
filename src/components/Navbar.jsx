import React, { useState } from "react";

import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { basket } from "../icons";
import { logo } from "../icons";
import { listIcon } from "../icons";



function Navbar() {
  const [active, setActive] = useState(false);
  const [activemenu, setActiveMenu] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };
  const showdropmenu = () => {
    setActiveMenu(!activemenu);
  };
 

  return (
    <div className=" z-50 fixed w-full text-white bg-black flex justify-between p-6">
      <div className="logo flex">
        {logo}
        <span className="text-2xl font-bold">SHOPPERS</span>
      </div>
      <nav className="">
        <div onClick={showMenu} className="absolute right-6 md:hidden">
          {listIcon}
        </div>{" "}
        <ul className="hidden md:flex gap-8  uppercase  ">
          <Link to={"/"}>
            <li className="font-bold">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="font-bold">About</li>
          </Link>
          <Link to={"/contact"}>
            <li className="font-bold ">Contact</li>
          </Link>

          <li onClick={showdropmenu} className="font-bold cursor-pointer ">
            Product
            {activemenu == true ? (
              <ul className="fixed bg-black/50  py-6">
               
                <Link to={"/tradionaldress"}>
                  <li className="p-4 ">PARTY DRESS</li>
                </Link>
                <Link to={"/westrendress"}>
                  <li className="p-4 ">WESTREN DRESS</li>
                </Link>
                <Link to={"/heels"}>
                  <li className="p-4 ">HEELS</li>
                </Link>

                <Link to={"/shoes"}>
                  <li className="p-4 ">SHOES</li>
                </Link>
              </ul>
            ) : (
              <div></div>
            )}
          </li>

          <Link to={"/cart"}>
            <li>{basket}</li>
          </Link>
        </ul>
        <MenuItems
          showMenu={showMenu}
          active={active}
          activemenu={activemenu}
          showdropmenu={showdropmenu}
        />
      </nav>
    </div>
  );
}

export default Navbar;
