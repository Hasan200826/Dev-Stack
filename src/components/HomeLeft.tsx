import React from 'react'

const HomeLeft = () => {
  return (
    <div className=' w-4/7 pl-5'>
      <h1 className=' capitalize text-4xl font-bold mb-4'>Build your ideal <span className=' block bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent'>devolopment stack</span></h1>
      <p className='min-w-[299px] w-2/3 mb-5'>Explore frontend, backend, database, and tooling options,
         compare them side by side, and put together the stack that fits your
         next project.
      </p>
      <div className=' flex gap-3'>
        <button className=' text-center bg-gradient-to-r from-red-500 to-purple-600 py-1.5 w-[180px] rounded-[10px] text-white'>Explore Technologies</button>
        <button className=' text-center w-[180px] py-1.5 rounded-[10px] text-black border-1'>learn more</button>
      </div>
    </div>
  )
}

export default HomeLeft
