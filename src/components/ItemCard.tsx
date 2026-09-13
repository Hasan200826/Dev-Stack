import React, { useState } from 'react'
import { Bounce, toast } from 'react-toastify';

interface ItemCardpromp{
 exploreItem:string[],
 stackArr:string[],
  setstackArr: React.Dispatch<React.SetStateAction<string[]>>

}

const ItemCard = ({exploreItem,stackArr,setstackArr}:ItemCardpromp[]) => {

  const [isClick,setIsclick]=useState(false)
  
  function handleClick (){
    setIsclick(true)
    setstackArr([...stackArr,exploreItem])
    toast('🦄 added stack', {
       position: "bottom-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: false,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
       transition: Bounce,
      });
  }

  return (
    <div className=" rounded-3xl border border-gray-100 bg-transparent p-4 shadow-sm ">
      {/* Top Section */}
      <div className="flex items-center justify-between py-4 px-4">
        {/* React Logo */}
        <img
          src={exploreItem.icon}
          alt={exploreItem.name}
          className="w-[30px] h-[30px] object-contain"/>

        {/* Popular Badge */}
        <span className="rounded-full bg-cyan-50 px-2 py-1 text-sm font-semibold text-cyan-400">
          {exploreItem.badge}
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-7 text-2xl font-bold text-gray-900">
        {exploreItem.name}
      </h2>

      {/* Description */}
      <p className=" text-[10px] mb-4 text-gray-400">
        {exploreItem.description}
      </p>

      {/* Bottom Info */}
      <div className="  flex items-center justify-between border-t border-gray-100">
        <span className="rounded-md bg-gray-50  text-[10px] text-gray-500">
          {exploreItem.category}
        </span>

        <span className="text-[10px] text-gray-500">
          {exploreItem.difficulty}
        </span>

        <div className="flex items-center gap-2">
          <span className="text-xl text-yellow-400">★</span>
          <span className="text-lg font-semibold text-gray-800">
            {exploreItem.rating}
          </span>
        </div>
      </div>

      {/* Button */}
      <button
          onClick={handleClick}
          disabled={isClick}
          className="mt-7 w-full rounded-[10px] bg-[#071124] py-2 text-sm font-medium text-white transition
             hover:bg-[#101c35]
             disabled:cursor-not-allowed
             disabled:bg-gray-400
             disabled:opacity-70"
             >
           {isClick === false ? "Add to Stack" : "✓Added to stack"}
</button>
    </div>
  );
};

// export default ReactCard;

export default ItemCard

