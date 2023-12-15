import React from 'react'
import BarazMall from './Components/BarazMall/BarazMall'
import Carousel from './Components/Carousel/Carousel'
import FlashSale from './Components/FlashSale/FlashSale'
import Footer from './Components/Footer/Footer'
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
      <BarazMall/>
      <Footer/>
    </div>
  )
}

export default App