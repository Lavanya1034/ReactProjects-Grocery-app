import React from "react";
import Constants from "../api/Constants";
import { Link } from "react-router-dom";

function Categories(props) {
  const { catId, catImage, catName } = props.data;
  return (
    <div className="col-sm-3" style={{marginBottom:"15px"}}>
      <div class="card" style={{height:"100%"}}>
      <img src={Constants.IMAGE_URL+ catImage} alt="image" className="card-top-img" height="200px"/>
         
        <div class="card-body">
             <h5 class="card-title">{catName}</h5>

          <Link to={"/products/"+catId} class="btn btn-primary btn-block">
            Select
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
