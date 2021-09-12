import { useEffect, useState } from "react";
import { Box, Text, Heading, Stack, Image } from "@chakra-ui/react";
import axios from "axios";
import { Link,Redirect } from "react-router-dom";
import Blog from "../components/Blog";

const Blogs = (props) => {
  if(!props.user){
    return <Redirect to={'/login'}/>
  }
  return (
    <>
    <Blog/>
    <Blog/>
    <Blog/>
    <Blog/>
    </>
  );
};

export default Blogs;
