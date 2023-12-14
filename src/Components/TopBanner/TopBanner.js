import React from 'react'
import feature1 from "../../images/feature1.png"
import feature2 from "../../images/feature2.png"
import feature3 from "../../images/feature3.png"
import feature4 from "../../images/feature4.png"
import top from "../../images/top.png"
import "./TopBanner.css"

const TopBanner = () => {
  return (
    <div className='topBanner'>
      <div className='container py-2'>
      <div className='text-center'>
      <img  src={top} className='top' alt='Top product'/>
      </div>
      <div className='row'>
        <div className='col m-2  feature'><img src={feature1} className='img-fluid'width="50" alt='Top product'/><a href='/' className='text-decoration-none text-dark fw-bold ps-2 '>Free Shopping</a></div>
        <div className='col m-2  feature'><img src={feature2} className='img-fluid'width="50" alt='Top product'/><a href='/' className='text-decoration-none text-dark fw-bold ps-2 '>Grocery Shopping</a></div>
        <div className='col m-2  feature'><img src={feature3} className='img-fluid'width="50" alt='Top product'/><a href='/' className='text-decoration-none text-dark fw-bold ps-2 '>Baraz Mall</a></div>
        <div className='col m-2  feature'><img src={feature4} 
        className='img-fluid' width="50"alt='Top product'/><a href='/' className='text-decoration-none text-dark fw-bold ps-2 '>Digital Sheba</a></div>
      </div>
    </div>
    </div>
  )
}

export default TopBanner