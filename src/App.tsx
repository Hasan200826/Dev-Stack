

import './App.css'
import ExploreSection from './components/ExploreSection'
import HomeSection from './components/HomeSection'
import NavBer from './components/NavBer'
import { Suspense } from 'react'
import Futter from './components/Futter'
import type { stackItemType } from './components/stackItemType'

const ExplorePromis = async ():Promise<stackItemType[]> =>{
   const res = await fetch('../public/items.json');
   const data = await res.json()
   return data
}

function App() {
  return (
    <>
      <NavBer/>
      <HomeSection/>
      <Suspense fallback= {<div>loding....</div>}>
        <ExploreSection ExplorePromis={ExplorePromis()}/>
      </Suspense>
      <Futter/>
    </>
  )
}

export default App
