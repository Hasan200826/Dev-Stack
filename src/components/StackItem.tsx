import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { Bounce, toast } from 'react-toastify'


interface StackItempromp {
  stackItem:string[]
  setstackArr: React.Dispatch<React.SetStateAction<string[]>>
}

const StackItem = ({stackItem,stackArr,setstackArr}:StackItempromp) => {
  function heandlCloseBtn (id) {
    setstackArr(stackArr.filter((item)=>item.id !==id ))
    toast.success(`${stackItem.name} removed from stack`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Bounce,
    })
  }
  return (
    <div className=' h-[60px] w-full flex justify-between border-1 border-gray-300 rounded-2xl p-3'>
      <div className=' h-full  flex items-center gap-2'>
        <img src={stackItem.icon} className=' max-h-7' alt="" />
        <div>
          <h2 className=' font-semibold text-[15px]'>{stackItem.name}</h2>
          <p className=' text-[10px]'>{stackItem.category}</p>
        </div>
        
      </div>
      <div className=''>
          <button 
          onClick={()=>heandlCloseBtn(stackItem.id)}
          className=' h-full text-2xl'>
            <IoMdClose/>
          </button>
        </div>
    </div>
  )
}

export default StackItem
