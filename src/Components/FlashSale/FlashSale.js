import React from 'react'

import "./FlashSale.css"
import FlashSaleData from '../../Data/FlashSaleData'

const FlashSale = () => {
  return (
    <div className='bg-brand'>
        <div className='container py-3'>
        <h2 className='fs-5'>FLASH SALE</h2>
        <div className='d-flex flex-wrap flashSale'>
                {FlashSaleData.map(item=>
                        <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src={item.photo} className='img-fluid' alt='flash sale product'/>
                        <p className='card-title' >{item.title}</p>
                        <h3 className='card-price' >{item.price}</h3>
                        <h4 className='card-text'>৳<strike className="text-muted">{item.strikePrice}</strike>{item.offerPrice}</h4>
                </div>)}
        </div>
    </div>
    </div>
  )
}

export default FlashSale