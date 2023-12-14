import React from 'react'
import d1 from "../../images/d1.jpg"
import d2 from "../../images/d2.jpg"
import d3 from "../../images/d3.jpg"
import d4 from "../../images/d4.jpg"
import d5 from "../../images/d5.jpg"
import d6 from "../../images/d6.jpg"
import "./BarazMall.css"

const BarazMall = () => {
  return (
    <div className='bg-brand'>
    <div className='container py-3'>
    <h2 className='fs-5'>Baraz Mall</h2>
    <div className='d-flex flex-wrap flashSale'>
        <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                <img src={d1} className='img-fluid' alt='flash sale product'/>
                <p className='card-title' >Buds Air wireless Bluetooth Headsets in Ear...</p>
                <h3 className='card-price' >৳400</h3>
                <h4 className='card-text'>৳<strike className="text-muted">600</strike>-33%</h4>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                <img src={d2} className='img-fluid' alt='flash sale product'/>
                <p className='card-title' >Vivo/Oppo/MI in Ear Earphone Good Bass...</p>
                <h3 className='card-price' >৳135</h3>
                <h4 className='card-text'>৳<strike className="text-muted">200</strike>-33%</h4>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                <img src={d3} className='img-fluid' alt='flash sale product'/>
                <p className='card-title' >TWS i7s Double Dual Mini Earphone With Power Cas...</p>
                <h3 className='card-price' >৳248</h3>
                <h4 className='card-text'>৳<strike className="text-muted">700</strike>-65%</h4>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                <img src={d4} className='img-fluid' alt='flash sale product'/>
                <p className='card-title' >Vivo in Ear Earphone Best sound quality for any...</p>
                <h3 className='card-price' >৳131</h3>
                <h4 className='card-text'>৳<strike className="text-muted">200</strike>-35%</h4>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                <img src={d5} className='img-fluid' alt='flash sale product'/>
                <p className='card-title' >01 Pcs Anti Rfid Card Holder NFC Blocking...</p>
                <h3 className='card-price' >৳26</h3>
                <h4 className='card-text'>৳<strike className="text-muted">66</strike>-53%</h4>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                <img src={d6} className='img-fluid' alt='flash sale product'/>
                <p className='card-title' >Electric Hot Water Bag pain remover [Multicolor]</p>
                <h3 className='card-price' >৳163</h3>
                <h4 className='card-text'>৳<strike className="text-muted">500</strike>-70%</h4>
        </div>
    </div>
</div>
</div>
  )
}

export default BarazMall