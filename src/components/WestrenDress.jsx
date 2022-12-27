
import React from 'react'
import { BsHeart } from 'react-icons/bs'
import { useEffect,useState } from 'react'
import axios from 'axios'


const WestrenDress = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get("./Westren.json").then((res)=>{
        setItems(res.data.data)
    })
  
   
  }, [])
  

  return (
    <>
      <h1 className="pt-10 text-center font-bold text-4xl">Fashion</h1>
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
    </>
  )
}

export default WestrenDress
