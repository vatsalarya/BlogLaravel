import { useEffect, useState } from "react";
import { Box, Text, Heading, Stack, Image, Button } from "@chakra-ui/react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const FullBlog = (props) => {
  const [responseMessage, setResponseMessage] = useState("");
  const [blogDetails, setBlogDetails] = useState({});
  useEffect(() => {
    axios.get(window.location.pathname)
      .then((response) => {
        setBlogDetails(response.data);
      })
      .catch((error) => {
        setResponseMessage(error.response.data.message);
      });
  }, []);

  // if(props.user){
  //   return <Redirect to={'/login'}/>
  // }
  return (
    <Stack w="80vh" mt="8vh" isInline key={blogDetails.id}>
      <h3 color="red">{responseMessage}</h3>
      {/* align="center"> */}
      <Image
        src={"https://picsum.photos/seed/" + blogDetails.id + "/150/300"}
        boxSize="35vh"
        mr="15px"
      />
      <Box align="left">
        <Heading textAlign="left">{blogDetails.title}</Heading>
        <Text textAlign="left" mt="1vh" mb="3vh">
          Author : {blogDetails.author}
        </Text>
        {/* {blogDetails.user_id===props.user.id ? (<a href={"http://localhost:3000/blogs/edit/"+blogDetails.id}><Button mb="25px" bg="green.100">Edit</Button></a>):""} */}
        <Text textAlign="left">{blogDetails.body}</Text>
      </Box>
    </Stack>
  );
};

export default FullBlog;
