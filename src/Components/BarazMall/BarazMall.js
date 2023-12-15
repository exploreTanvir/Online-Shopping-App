import React from 'react'
import BarazMallData from '../../Data/BarazMallData'
import "./BarazMall.css"

const BarazMall = () => {
  return (
    <div className='bg-brand'>
    <div className='container py-3'>
    <h2 className='fs-5'>Baraz Mall</h2>
    <div className='d-flex flex-wrap flashSale'>
    {BarazMallData.map(item=>
                        <div  className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                        <img src={item.photo} className='img-fluid' alt='flash sale product'/>
                        <p className='card-title' >{item.title}</p>
                        <h3 className='card-price' >{item.price}</h3>
                        <h4 className='card-text'>৳<strike className="text-muted">{item.strikePrice}</strike>{item.offerPrice}</h4>
                </div>)}
    </div>
</div>
<button class="btn btn-outline-primary mx-auto d-block mt-5 mb-1 w-25">LOAD MORE</button>
</div>
  )
}

export default BarazMall