import { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Blog from "../components/Blog";

const FullBlog = (props) => {
  const [blogDetails, setBlogDetails] = useState([0]);
  useEffect(()=>{
    axios.get('/blogs/'+ props.blog)
    .then(response =>{
      console.log(response.data);
      setBlogDetails(response.data);
    })
    .catch(error => {
      console.log(error)
    })
  },[])

  if(!props.user){
    return <Redirect to={'/login'}/>
  }
  return (
    <div>
      <Blog blogDetails={blogDetails}/>
    </div>
  );
};

export default FullBlog;
