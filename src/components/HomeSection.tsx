import React from 'react'
import HomeLeft from './HomeLeft'
import HommeRight from './HommeRight'

const HomeSection = () => {
  return (
    <div className=' container mx-auto py-[50px]  flex justify-between items-center min-h-[633px]'>
      <HomeLeft/>
      <HommeRight/>
    </div>
  )
}

export default HomeSection
