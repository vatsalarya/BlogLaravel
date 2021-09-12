import { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Blog from "../components/Blog";

const UserBlogs = (props) => {

  const [blogList, setBlogList] = useState([]);
  useEffect(()=>{
    axios.get('/userblogs')
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
      <Blog blogDetails={blogDetails} user={props.user}/>
    ))}
    </div>
  );
};

export default UserBlogs;
