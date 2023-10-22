import React from 'react'
import CartProducts from '../components/CartProducts'
import CartSummary from '../components/CartSummary'
import Navbar from '../components/Navbar'

function CartPage() {
  return (
    <div>
    <Navbar/>
    <div className='container'>
        <div className='row'>
            <div className='col-sm-8'>
            <CartProducts/>
            </div>
            <div className='col-sm-4'>
            <CartSummary/>
            </div>
        </div>  

    </div>
    </div>
  )
}

export default CartPage