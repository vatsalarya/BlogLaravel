import { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Blog from "../components/Blog";

const Blogs = (props) => {
  const [blogList, setBlogList] = useState([{}]);
  useEffect(()=>{
    axios.get('/blogs')
    .then(response =>{
      setBlogList(response.data);
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
    {blogList.map((blogDetails) => (
      <Blog blogDetails={blogDetails} user={props.user} key={blogDetails.id}/>
    ))}
    </div>
  );
};

export default Blogs;
