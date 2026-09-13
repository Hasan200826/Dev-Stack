import React from 'react'

interface ItemRightHeadingprops{
  stackArr:string[]
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
