import React from 'react'
import StackItem from './StackItem'
import type { stackItemType } from './stackItemType'


interface ItemRightItemBoxprops{
  stackArr:stackItemType[]
  setstackArr: React.Dispatch<React.SetStateAction<stackItemType[]>>
  
}



const ItemRightItemBox = ({stackArr,setstackArr}:ItemRightItemBoxprops) => {
  return (
    <div className=' border-1 border-gray-200 w-full min-h-[100px] rounded-2xl flex   flex-col gap-2 p-2 items-center justify-center'>
      {stackArr.length===0 ?<p className=' capitalize'>Your stack is emty</p>: (
        stackArr.map((stackItem)=> <StackItem stackItem={stackItem} stackArr={stackArr} setstackArr={setstackArr} />)
      )}
    </div>
  )
}

export default ItemRightItemBox
