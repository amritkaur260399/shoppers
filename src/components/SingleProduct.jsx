import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";


const Heels = () => {
  const {id}=useParams()
   const [items, setItems] = useState([]);
   console.log(id)
 

  useEffect(() => {
    axios.get("../heels.json").then((res) => {
      setItems(res.data.data);
  
      
      
    });
  }, []);
 
  return (
    <div className="pt-32 flex justify-center ">
     {items.map((ele)=>(
       <div className="h-52 w-52 m-6  bg-gray-100">
       <p>{ele.id}</p>
       <p>{ele.size}</p>
      </div>
     ))}
    
    </div>
  );
};

export default Heels;
