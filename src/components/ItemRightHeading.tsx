import type { stackItemType } from "./stackItemType"


interface ItemRightHeadingprops{
  stackArr:stackItemType[]
}


const ItemRightHeading = ({stackArr}:ItemRightHeadingprops) => {
  return (
    <div className=' mb-3 '>
      <h3 className=' font-semibold capitalize'>your stack</h3>
      <p>{`${stackArr.length===0 ? 'No tecnologies selected yet' : `(${stackArr.length})tecnologies selected`} `}</p>
    </div>
  )
}

export default ItemRightHeading
