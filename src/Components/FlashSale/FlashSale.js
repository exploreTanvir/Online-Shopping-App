import React from 'react'
import f1 from "../../images/f1.jpg"
import f2 from "../../images/f2.jpg"
import f3 from "../../images/f3.jpg"
import f4 from "../../images/f4.jpg"
import f5 from "../../images/f5.jpg"
import f6 from "../../images/f6.jpg"
import "./FlashSale.css"

const FlashSale = () => {
  return (
    <div className='bg-brand'>
        <div className='container py-3'>
        <h2 className='fs-5'>FLASH SALE</h2>
        <div className='d-flex flex-wrap flashSale'>
            <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                    <img src={f1} className='img-fluid' alt='flash sale product'/>
                    <p className='card-title' >Buds Air wireless Bluetooth Headsets in Ear...</p>
                    <h3 className='card-price' >৳400</h3>
                    <h4 className='card-text'>৳<strike className="text-muted">600</strike>-33%</h4>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                    <img src={f2} className='img-fluid' alt='flash sale product'/>
                    <p className='card-title' >Vivo/Oppo/MI in Ear Earphone Good Bass...</p>
                    <h3 className='card-price' >৳135</h3>
                    <h4 className='card-text'>৳<strike className="text-muted">200</strike>-33%</h4>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                    <img src={f3} className='img-fluid' alt='flash sale product'/>
                    <p className='card-title' >TWS i7s Double Dual Mini Earphone With Power Cas...</p>
                    <h3 className='card-price' >৳248</h3>
                    <h4 className='card-text'>৳<strike className="text-muted">700</strike>-65%</h4>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                    <img src={f4} className='img-fluid' alt='flash sale product'/>
                    <p className='card-title' >Vivo in Ear Earphone Best sound quality for any...</p>
                    <h3 className='card-price' >৳131</h3>
                    <h4 className='card-text'>৳<strike className="text-muted">200</strike>-35%</h4>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                    <img src={f5} className='img-fluid' alt='flash sale product'/>
                    <p className='card-title' >01 Pcs Anti Rfid Card Holder NFC Blocking...</p>
                    <h3 className='card-price' >৳26</h3>
                    <h4 className='card-text'>৳<strike className="text-muted">66</strike>-53%</h4>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 p-2 card-body'>
                    <img src={f6} className='img-fluid' alt='flash sale product'/>
                    <p className='card-title' >Electric Hot Water Bag pain remover [Multicolor]</p>
                    <h3 className='card-price' >৳163</h3>
                    <h4 className='card-text'>৳<strike className="text-muted">500</strike>-70%</h4>
            </div>
        </div>
    </div>
    </div>
  )
}

export default FlashSale