import React, { useEffect, useState } from "react";
import axios from "axios";
import EndPoints from "../api/EndPoints";
import { useParams } from "react-router-dom";

function SubCategory() {
  const [subCategories, setSubCategories] = useState([]);
  const [error, setError] = useState(null);
  const {catId} = useParams()
  function dataFetch() {
    
    axios
      .get(EndPoints.SUB_CATEGORY_URL+catId)
      .then((res) => setSubCategories(res.data.data))
      .catch((err) => setError(err));
  }

  useEffect(() => {
    dataFetch();
  }, [catId]);

  return (
    <div className="container">
      <h2 className="text-center">Sub Categories</h2>

      <ul className="list-group">
        {subCategories.map((catItem,index) => (
          <li key={index} class="list-group-item">{catItem.subName}</li>
        ))}
      </ul>
    </div>
  );
}

export default SubCategory;
