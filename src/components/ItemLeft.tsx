
import { use } from 'react'
import ItemCard from './ItemCard'
import type { stackItemType } from './stackItemType'
// import type { stackItemType } from './stackItemType'



interface ItemLeftprops{
  ExplorePromis:Promise<stackItemType[]>,
  stackArr:stackItemType[]
  setstackArr: React.Dispatch<React.SetStateAction<stackItemType[]>>
}

const ItemLeft = ({ExplorePromis,stackArr,setstackArr}:ItemLeftprops) => {
  const exploreItems:stackItemType[]= use(ExplorePromis)
   console.log(exploreItems);
   
  return (
    <div className=' col-span-3 grid grid-cols-3 gap-3'>
      {
       exploreItems.map((exploreItem) => (
        <ItemCard kye={exploreItem.id} exploreItem={exploreItem} stackArr={stackArr} setstackArr={setstackArr}/>
        ))
      }
      
    </div>
  )
}



export default ItemLeft
