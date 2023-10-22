import React from "react";
import Constants from "../api/Constants";
import { useDispatch } from "react-redux";
import {
  BsFillCartDashFill,
  BsFillCartPlusFill,
  BsFillTrash3Fill,
} from "react-icons/bs";
import { addToCart, deleteFromCart } from "../redux/actions/cart-actions";


function CartIndividualProduct(props) {
  const product = props.item;
  const { _id, image, mrp, price, productName, unit, quantity } = product;
  const dispatch = useDispatch();

  //when a product is removed from cart

  function handletrash() {
    dispatch(deleteFromCart(product));
  }

  //When plus symbol is clicked to add quantity
  function handleAdd() {
    dispatch(addToCart(product));
  }

  //When minus symbol is clicked to subtract quantity
  function handleMinus() {
    dispatch(deleteFromCart(product));
  }
  console.log(product);

  return (
    <div className="col-sm-8" style={{ margin: "20px 0" }}>
      <div className="card" style={{ height: "100%" }}>
        <img
          src={Constants.IMAGE_URL + image}
          alt="pro-image"
          className="card-top-img"
          height="200px"
          style={{ margin: "10px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">
            {unit}
            <h2>
              <span>&#8377;</span>
              {price}
              <span
                style={{ fontSize: "22px", marginLeft: "10px", color: "#888" }}
              >
                <del>
                  <span>&#8377;</span>
                  {mrp}
                </del>
              </span>
            </h2>
          </p>
          <div style={{ display: "flex" }}>
            <BsFillCartDashFill
              className="cart-sym"
              style={{ color: "red" }}
              onClick={() => handleMinus()}
            />
            <span className="badge badge-light">{quantity}</span>
            <BsFillCartPlusFill
              className="cart-sym"
              style={{ color: "green" }}
              onClick={() => handleAdd()}
            />
          </div>
          <BsFillTrash3Fill
            onClick={() => handletrash(_id)}
            style={{
              color: "red",
              marginLeft: "0.9rem",
              marginTop: "0.5em",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CartIndividualProduct;
