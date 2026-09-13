

import Logo from '../assets/logo-text.png'


const NavBer = () => {
  return (
    <div className=' h-[60px] sticky top-0 bg-white shadow'>
      <nav className=' container mx-auto px-5 flex justify-between items-center capitalize h-full'>
        <img src={Logo} alt="" />
        <ul className=' flex gap-5'>
          <li><a href="">home</a></li>
          <li><a href="">technologies</a></li>
          <li><a href="">projects</a></li>
          <li><a href="">about</a></li>
          <li><a href="">contact</a></li>
        </ul>
        <div className=' flex gap-5'>
          <button className=' px-4 py-2 capitalize rounded-full '>sing in</button>
          <button className=' bg-pink-600 px-4 py-2 capitalize rounded-full '>sing up</button>
        </div>
      </nav>
    </div>
  )
}

export default NavBer
