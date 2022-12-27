
import React from 'react'
import { BsHeart } from 'react-icons/bs'
import { useEffect,useState } from 'react'

import axios from "axios";
import { circle, circle1, circle4, circle3 } from "../icons";



const Shoes = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState([])
    const [items2, setItems2] = useState([]);

  const [value, setValue] = useState("");
  const [active,setActive]=useState(false)

  useEffect(() => {
    axios.get("./shoes.json").then((res)=>{
        setItems(res.data.data)
        setItems2(res.data.data)
    })
  
   
  }, [])
  const handlechange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };
  const handleclick = () => {
    const filtered = items.filter((val) => val.colour == value);
    setItems(filtered);
    console.log(filtered);
  };

  

  return (
    <div className="pt-32 flex justify-center ">
 <div className="">
        <div className="md:flex w-full  md:gap-6 gap-2 justify-center">
         <div><input
            className="h-12 w-72 mr-2 border-2 border-black-500 ouline-none "
            type="text"
            placeholder="search"
            onChange={handlechange}
          />
          <button  className=" bg-black text-white px-4 py-2 rounded-lg" onClick={handleclick}>Search</button></div> 
          <div className=" flex sm:mx-20 my-2">
            <buttton
              onClick={() => {
                const filtered = items2.filter((val) => val.colour == "pink");
                setItems(filtered);
              }}
              className=" cursor-pointer py-2"
            >
              {circle}
            </buttton>
            <buttton
              onClick={() => {
                const filtered = items2.filter((val) => val.colour == "black");
                setItems(filtered);
              }}
              className=" cursor-pointer py-2"
            >
              {circle1}
            </buttton>
            <buttton
              onClick={() => {
                const filtered = items2.filter((val) => val.colour == "blue");
                setItems(filtered);
              }}
              className=" cursor-pointer py-2"
            >
              {circle4}
            </buttton>
            <buttton
              onClick={() => {
                const filtered = items2.filter((val) => val.colour == "red");
                setItems(filtered);
              }}
              className=" cursor-pointer py-2"
            >
              {circle3}
            </buttton>
            <div className="">
          <div className=" text-2xl text-white bg-black md:px-10 px-2 py-2 rounded-lg"
          onClick={()=>{
            setActive(!active)
          }}>size</div>
          {active==true?
          <ul className="fixed bg-black text-white px-6 py-4">
            <li
               onClick={() => {
                const filtered = items.filter((val) => val.size == 6);
                setItems(filtered);
              }}
            className="p-4 cursor-pointer">Size 6</li>
            <li 
             onClick={() => {
              const filtered = items.filter((val) => val.size == 7);
              setItems(filtered);
            }}
            className="p-4 cursor-pointer">Size 7</li>
            <li  
             onClick={() => {
              const filtered = items.filter((val) => val.size == 8);
              setItems(filtered);
            }}
            className="p-4 cursor-pointer">Size 8</li>
           
          </ul>:<div></div>}
          </div>
          </div>
         
        </div>
      <section className="p-5 grid grid-cols-1 gap-10 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 2xl:px-20">
        {items.map((element) => {
        

          return (
            <div key={element.id} className="bg-gray-200 rounded-lg w-96">
              <img   src={element.image} alt={element.title} className="rounded-t-lg w-96 h-80" />
              <div className="flex items-center justify-between">
                <div className="px-5">
                  <h2 className="font-bold mt-5">{element.title}</h2>
                  <p>{element.desc}</p>
                </div>

                <div className="px-5">
                  <BsHeart title="Add to Wishlist" className="cursor-pointer" />
                </div>
              </div>
              <div className="my-2 px-5">
                <small className="bg-gray-600  rounded-full  text-white tracking-widest mr-3">
                  {element.category}
                </small>
                <small className="bg-gray-600  rounded-full px-2 text-white tracking-widest mr-3">
                  {element.type}
                </small>
              </div>
              <p className="text-2xl px-5 pb-6">$ {element.price}</p>
            </div>
          )
        })}
      </section>
      </div>  </div>
  )
}

export default Shoes
