import { Box, Text, Heading, Stack, Image, Button } from "@chakra-ui/react";

const Blog = (props) => {
  // console.log(props.user.id);
  // console.log(props.blogDetails.user_id);
  return (
    <Stack w="80vh" mt="8vh" isInline key={props.blogDetails.id} >
    {/* align="center"> */}
    <Image src={'https://picsum.photos/seed/'+props.blogDetails.id+'/150/300'} mr="15px"/>
      <Box align="left">
      <Heading mb="3vh" textAlign="left"><a href={"http://localhost:3000/blogs/"+props.blogDetails.id}>{props.blogDetails.title}</a></Heading>
      <Text textAlign="left" noOfLines={7}>
        {props.blogDetails.body}
      </Text>
      {props.blogDetails.user_id===props.user.id ? (<a href={"http://localhost:3000/blogs/edit/"+props.blogDetails.id}><Button my="10px" bg="green.100">Edit</Button></a>):""}

      </Box>
    </Stack>
  );
};
export default Blog;