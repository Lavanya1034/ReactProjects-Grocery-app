import { useEffect, useState } from "react";
import axios from "axios";
import Categories from "./Categories";
import EndPoints from "../api/EndPoints";


const CategoryList = ()=>{

    const [categories,setCategories] = useState([])
    const[error,setError] = useState(null)
    const dataFetch = ()=>{
              axios.get(EndPoints.CATEGORY_URL)
              .then(res=>setCategories(res.data.data))
              .catch(err=>setError(err))
    }

    useEffect(()=>{
        dataFetch()
    },[])
    return(
        <div className="container">
            <h2 className="text-center">Category List</h2><br/>
            <div className="row">
                {categories.map((IndCategory)=>(
                    <Categories data={IndCategory}/>
                ))}
            </div>
            

        </div>
    )
}

export default CategoryList;