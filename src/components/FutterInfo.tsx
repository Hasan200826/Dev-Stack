import React from 'react'
import Logo from '../assets/logo-text.png'

const FutterInfo = () => {
  return (
    <div className=' container mx-auto pb-10'>
      <div className='  flex justify-between border-b-1 border-gray-200 pb-5'>
        <div>
          <img src={Logo} className=' mb-5' alt="" />
          <p className=' text-gray-400 w-[470px] mb-5'>Curated tools,tecnologies and responces for devolopers building morden software.</p>
          <ul className=' flex gap-5 capitalize'>
           <li><a href="">github</a></li>
           <li><a href="">twitter</a></li>
           <li><a href="">linkden</a></li>
          </ul>
        </div>
        <div>
          <h3 className=' font-semibold capitalize mb-3'>product</h3>
          <ul className=' capitalize text-gray-400'>
           <li><a href="">home</a></li>
           <li><a href="">tecnologies</a></li>
           <li><a href="">projects</a></li>
          </ul>
        </div>
        <div>
           <h2 className=' capitalize font-semibold mb-3'>legal</h2>
           <ul className=' text-gray-400 capitalize'>
             <li><a href="">privacy policy</a></li>
             <li><a href="">terms of service</a></li>
           </ul>
        </div>
      </div>
      <div className=' flex justify-between mt-10'>
        <p className=' text-gray-400'>© 2026 Dev Stack. All rights reserved.</p>
        <div>
          <ul className=' capitalize text-gray-400 flex gap-3'>
            <li><a href="">privacy</a></li>
            <li><a href="">terms</a></li>
          </ul>
        </div>
      </div>
    </div>
   
  )
}

export default FutterInfo
