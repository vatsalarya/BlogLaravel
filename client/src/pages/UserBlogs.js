import { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Blog from "../components/Blog";

const UserBlogs = (props) => {
  const [responseMessage, setResponseMessage] = useState('');
  const [blogList, setBlogList] = useState([]);
  useEffect(()=>{
    axios.get('/userblogs')
    .then(response =>{
      setBlogList(response.data);
    })
    .catch(error => {
				setResponseMessage(error.response.data.message)
    })
  },[])

  if(!props.user){
    return <Redirect to={'/login'}/>
  }
  return (
    <div>
			<h3 color="red">{responseMessage}</h3>
    {blogList.map((blogDetails) => (
      <Blog blogDetails={blogDetails} user={props.user}/>
    ))}
    </div>
  );
};

export default UserBlogs;
