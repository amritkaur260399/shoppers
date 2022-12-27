import React from "react";

function FeaturedProduct({ text }) {
  return (
    <div className="max-w-screen-xl   w-screen">
      <h1></h1>
      <div className=" md:flex justify-between items-center gap-10 w-screen md:ml-10 ">
        <div className="md:w-2/4">
            <div className="aspect-w-18 aspect-h-9">
          <img className="h-[380px]" src="./images/offer1.webp" /></div>
        </div>
        <div className="md:w-2/4">
        <div className="aspect-w-18 aspect-h-9">
          <img className="h-[350px]" src="./images/offers.jpg" /></div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
