import { useEffect, useState } from "react";
import { Box, Text, Heading, Stack, Image } from "@chakra-ui/react";
import axios from "axios";
import { Link,Redirect } from "react-router-dom";
import Blog from "../components/Blog";

const MyBlogs = (props) => {

  const [blogList, setBlogList] = useState([]);
  useEffect(()=>{
    axios.get('/userblogs')
    .then(response =>{
      console.log(response.data);
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
      <Blog blogDetails={blogDetails}/>
    ))}
    </div>
  );
};

export default MyBlogs;
