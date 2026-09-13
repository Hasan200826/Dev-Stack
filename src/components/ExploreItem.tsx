import React, { useState } from 'react'
import ItemLeft from './ItemLeft'
import ItemRight from './ItemRight'


interface ExploreItemprops{
  ExplorePromis:promises<string[]>
}

const ExploreItem = ({ExplorePromis}:ExploreItemprops) => {
  
  const [stackArr, setstackArr] = useState<string[]>([])
  console.log(stackArr)
  return (
    <div className=' grid grid-cols-4 gap-5'>
      <ItemLeft ExplorePromis={ExplorePromis} stackArr={stackArr} setstackArr={setstackArr}/>
      <ItemRight stackArr={stackArr} setstackArr={setstackArr}/>
    </div>
  )
}

export default ExploreItem
