import React from "react";
import Constants from "../api/Constants";
import { Link } from "react-router-dom";

function Products(props) {
  const { _id, image, mrp, price, productName, unit } = props.data;
  return (
    <div className="col-sm-4" style={{marginBottom:"20px"}}>
      <div className="card" style={{height:"100%"}}>
        <img
          src={Constants.IMAGE_URL + image}
          alt="pro-image"
          className="card-top-img"
          height="200px"
          style={{margin:"10px"}}
        />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">
            {unit}
            <h2>
              <span>&#8377;</span>
                {price}
                <span style={{fontSize:"22px", marginLeft:"10px", color:"#888"}}>
                     
                
                <del>
                  <span>&#8377;</span>
                   {mrp}
                </del>
              </span>
            </h2>
          </p>
          <Link to={"/products/detail/"+_id} class="btn btn-primary btn-block">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
