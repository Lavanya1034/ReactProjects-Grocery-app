import React from "react";
import { useSelector } from "react-redux";
import CartIndividualProduct from "./CartIndividualProduct";

function CartProducts() {
  const { numberCart, carts } = useSelector((state) => state);
  console.log(numberCart)
  console.log(carts)
  return (
    <div className="container">
        
        {numberCart > 0 ? 
      <div className="col">
        
            {carts.map((prod)=>(
                <CartIndividualProduct item ={prod}/>
            )) }           
        
        </div> : 
        <div className="container">
            <div className="card col-sm-6" style={{height:"200px",marginTop:"20%",backgroundColor:"#f5b942",display:"flex",justifyContent:"center",alignItems:"center",color:"red"}}>
                <p className="text-center display-4" >Cart is empty</p>
            </div>
        </div>}
       
    </div>
  );
}

export default CartProducts;
