import { useEffect, useState } from "react";
import { Box, Text, Heading, Stack, Image } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = (props) => {
  
  return (
    <>
    <Stack w="80vh" mt="8vh" isInline>
    <Image src="https://picsum.photos/150/300" mr="15px"/>
      <Box>
      <Heading mb="3vh" textAlign="left" >Lorem Ipsum</Heading>
      <Text textAlign="left" >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        centuries, but also the leap into electronic typesetting, remaining
        centuries, but also the leap into electronic typesetting, remaining
        of Lorem Ipsum
      </Text>
      </Box>
    </Stack>
    </>
  );
};

export default Blog;
