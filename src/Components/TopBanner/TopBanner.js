import React from 'react'
import top from "../../images/top.png"
import "./TopBanner.css"
import topbannerData from './../../Data/TopData';

const TopBanner = () => {
  return (
    <div className='topBanner'>
      <div className='container py-2'>
      <div className='text-center'>
      <img  src={top} className='top' alt='Top product'/>
      </div>
      <div className='row'>
        {topbannerData.map(item=>
           <div className='col m-2  feature'><img src={item.photo} className='img-fluid'width="50" alt='Top product'/><a href='/' className='text-decoration-none text-dark fw-bold ps-2 '>{item.name}</a></div>)}
      </div>
    </div>
    </div>
  )
}

export default TopBanner