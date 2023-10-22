import React from "react";
import SubCategory from "../components/SubCategory";
import ProductList from "../components/ProductList";
import Navbar from "../components/Navbar";

function ProductPage() {
  return (
    <>
      <Navbar />
      <div className="container">
      <div className="row">
        <div className="col-md-3">
          <SubCategory />
        </div>
        <div className="col-md-9">
          <ProductList />
        </div>
      </div>
      </div>
    </>
  );
}

export default ProductPage;
