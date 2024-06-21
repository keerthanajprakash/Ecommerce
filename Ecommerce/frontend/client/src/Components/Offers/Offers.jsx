import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1 class='h2'>Offers on You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className='offers-right'>
        <img src={exclusive_image} height={300} width={200} alt=""/>
      </div>
    </div>
  )
}

export default Offers
