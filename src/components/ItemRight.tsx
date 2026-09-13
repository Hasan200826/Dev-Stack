import React from 'react'
import ItemRightHeading from './ItemRightHeading'
import ItemRightItemBox from './ItemRightItemBox'
interface ItemRightprops{
  stackArr:string[]
  setstackArr: React.Dispatch<React.SetStateAction<string[]>>
}

const ItemRight = ({stackArr, setstackArr}) => {
  function removeAllItems (){
    setstackArr([])
  }
  return (
    <div className=' col-span-1 '>
      <div className=' rounded-2xl border-1 p-4 border-gray-200'>
        <ItemRightHeading stackArr={stackArr}/>
        <ItemRightItemBox stackArr={stackArr} setstackArr={setstackArr}/>
        {
  stackArr.length === 0 ? (
    ''
  ) : (
    <button
    onClick={removeAllItems}
      className='capitalize text-pink-500 rounded-[7px] border border-pink-500 w-full p-1 mt-4'
    >
      remove all
    </button>
  )
}
        
      </div>
   
    </div>
  )
}

export default ItemRight
