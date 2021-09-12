import { Box, Text, Heading, Stack, Image, Button } from "@chakra-ui/react";

const Blog = (props) => {
  // console.log(props.user.id);
  // console.log(props.blogDetails.user_id);
  return (
    <Stack w="80vh" mt="8vh" isInline key={props.blogDetails.id} >
    {/* align="center"> */}
    <Image src={'https://picsum.photos/seed/'+props.blogDetails.id+'/150/300'} mr="15px"/>
      <Box align="left">
      <Heading mb="3vh" textAlign="left" >{props.blogDetails.title}</Heading>
      <Text textAlign="left" >
        {props.blogDetails.body}
      </Text>
      {props.blogDetails.user_id===props.user.id ? (<Button my="10px" bg="green.100">Edit</Button>):""}

      </Box>
    </Stack>
  );
};
export default Blog;