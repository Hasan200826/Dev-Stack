
import { use } from 'react'
import ItemCard from './ItemCard'


interface ItemLeftprops{
  ExplorePromis:promises<string[]>,
  stackArr:string[]
  setstackArr: React.Dispatch<React.SetStateAction<string[]>>
}

const ItemLeft = ({ExplorePromis,stackArr,setstackArr,isClick,setIsclick}:ItemLeftprops) => {
  const exploreItems:string[]= use(ExplorePromis)
   console.log(exploreItems);
   
  return (
    <div className=' col-span-3 grid grid-cols-3 gap-3'>
      {
       exploreItems.map((exploreItem) => (
        <ItemCard key={exploreItem.title} exploreItem={exploreItem} stackArr={stackArr} setstackArr={setstackArr}/>
        ))
      }
      
    </div>
  )
}



export default ItemLeft
