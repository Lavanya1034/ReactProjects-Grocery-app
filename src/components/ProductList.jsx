import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Products from "./Products";
import EndPoints from "../api/EndPoints";
import { useParams } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const {catId} = useParams()
  function dataFetch() {
    axios
      .get(
        EndPoints.PRODUCT_BY_CAT_ID_URL + catId
      )
      .then((res) => setProducts(res.data.data))
      .catch((err) => setError(err));
  }

  useEffect(() => {
    dataFetch();
  }, [catId]);

  console.log(products)
  return (
    <div className="container">
      <h2 className="text-center">Product Lists</h2>
      <div className="row">
        {products.map((item)=>(
            <Products data={item}/>
                    ))}
        
      </div>
    </div>
  );
}

export default ProductList;
