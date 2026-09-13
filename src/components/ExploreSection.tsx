import React from 'react'
import ExploreHeading from './ExploreHeading'
import ExploreItem from './ExploreItem'
import type { promises } from 'dns'

interface Exploreprop{
   ExplorePromis:promises<string[]>
}

const ExploreSection = ({ExplorePromis}:Exploreprop) => {
  return (
    <div className=' container mx-auto pb-20 border-b-1 border-gray-200'>
      <ExploreHeading/>
      <ExploreItem ExplorePromis={ExplorePromis}/>
    </div>
  )
}

export default ExploreSection
