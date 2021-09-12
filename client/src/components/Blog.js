import { useEffect, useState } from "react";
import { Box, Text, Heading, Stack, Image } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = (props) => {
  return (
    <Stack w="80vh" mt="8vh" isInline key={props.blogDetails.id}>
    <Image src={'https://picsum.photos/seed/'+props.blogDetails.id+'/200/300'} mr="15px"/>
      <Box>
      <Heading mb="3vh" textAlign="left" >{props.blogDetails.title}</Heading>
      <Text textAlign="left" >
        {props.blogDetails.body}
      </Text>
      </Box>
    </Stack>
  );
};

export default Blog;