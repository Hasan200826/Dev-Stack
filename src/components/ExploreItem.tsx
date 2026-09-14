

import { useState } from 'react'
import ItemLeft from './ItemLeft'
import ItemRight from './ItemRight'
import type { stackItemType,} from './stackItemType'


interface ExploreItemprops{
  ExplorePromis:Promise<stackItemType[]>
}

const ExploreItem = ({ExplorePromis}:ExploreItemprops) => {
  
  const [stackArr, setstackArr] = useState<stackItemType[]>([])
  return (
    <div className=' grid grid-cols-4 gap-5'>
      <ItemLeft ExplorePromis={ExplorePromis} stackArr={stackArr} setstackArr={setstackArr}/>
      <ItemRight stackArr={stackArr} setstackArr={setstackArr}/>
    </div>
  )
}

export default ExploreItem
