import React from 'react'
import Carousel from './Components/Carousel/Carousel'
import FlashSale from './Components/FlashSale/FlashSale'
import TopBanner from './Components/TopBanner/TopBanner'
import LogoSearchBar from './Components/logoSearchBar/LogoSearchBar'
import Navbar from './Components/navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <LogoSearchBar/>
      <Carousel/>
      <TopBanner/>
      <FlashSale/>
    </div>
  )
}

export default App