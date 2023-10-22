import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkOut } from '../redux/actions/cart-actions';

function CartSummary() {
    

    const {carts} = useSelector((state)=>state)
    const dispatch= useDispatch()

    console.log(carts)
    const navigate = useNavigate()
     //get the total price for cart details.

  let totPrice = 0.0;
  let shipAmt = 0.0;
  let taxAmt = 0.0;
  let totalAmt = 0.0;
  carts.forEach((element) => {
    console.log(element.quantity)
    totPrice = totPrice + element.price * element.quantity;
  });
  if (totPrice > 0) {
    shipAmt = Math.floor(totPrice * 0.1);
    taxAmt = Math.floor(totPrice * 0.2);
    totalAmt = (totPrice + shipAmt + taxAmt).toFixed(2);
  }

  function handleCheckOut(){
    dispatch(checkOut())
    navigate("/")
  }

  return (
   
      <div className='container' style={{display:"flex",flexDirection:"column",backgroundColor:"white",marginTop:"60px",padding:"20px",gap:"10px"}}>
        <h1 className='display-6 text-center' style={{color:"blue"}}>
         Order Summary
        </h1>
        <div className="row">
          <div className='col-sm-7'>
            <h2 >Subtotal</h2>
          </div>
          <div className='col-sm-5'>
            <h4 style={{color:"red"}}>${totPrice.toFixed(2)}</h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-7'>
            <h2>Shipping Estimate</h2>
          </div>
          <div className='col-sm-5'>
            <h4 style={{color:"red"}}>${shipAmt.toFixed(2)}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-7">
            <h2>Tax Estimate</h2>
          </div>
          <div className='col-sm-5'>
            <h4 style={{color:"red"}}>${taxAmt.toFixed(2)}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-7">
            <h2>Total</h2>
          </div>
          <div className='col-sm-5'>
            <h4 style={{color:"red"}}>${totalAmt}</h4>
          </div>
        </div>
       
          <button className='btn btn-primary' onClick={handleCheckOut}>
            Checkout
          </button>
    
      </div>
    
  );
}

export default CartSummary