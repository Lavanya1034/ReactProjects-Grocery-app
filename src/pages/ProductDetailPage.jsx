import React, { useEffect, useState } from "react";
import axios from "axios";
import EndPoints from "../api/EndPoints";
import Constants from "../api/Constants";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart} from '../redux/actions/cart-actions'

function ProductDetailPage() {
  const [product, setProduct] = useState({});
  const {id} = useParams()
  const dispatch = useDispatch()

  const dataFetch = () => {
    axios
      .get(EndPoints.PRODUCT_BY_ID + id)
      .then((res) => setProduct(res.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    dataFetch();
  }, []);

  const onAddToCartHandler = ()=>{
    console.log(product)
    dispatch(addToCart(product))
  }

  return (
    <>
      <Navbar />

      <div className="container">
        <div
          style={{
            backgroundColor: "fff",
            padding: "40px"
            
          }}
        >
          <div className="row">
            <div className="col-sm-6">
              <img
                src={Constants.IMAGE_URL + product.image}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-sm-6">
                <h5>{product.productName}</h5>
                <p>{product.unit}</p>
                <p>
                    {product.description}
                </p>
                <h2>
                    <span>&#8377;</span>
                    {product.price}
                    <span style={{fontSize:"22px", marginLeft:"10px", color:"#888"}}>
                        <del>
                            <span>&#8377;</span>
                            {product.mrp}
                        </del>
                    </span>
                </h2>
                <br/>
                <button className="btn btn-primary" onClick={onAddToCartHandler}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailPage;
