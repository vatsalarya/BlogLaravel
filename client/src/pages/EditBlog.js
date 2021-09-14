import { useState, useEffect } from "react";
import {
  InputGroup,
  InputLeftAddon,
  Input,
  FormControl,
  Stack,
  Button,
  Box,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { Redirect } from "react-router-dom";

const EditBlog = (props) => {
  const [responseMessage, setResponseMessage] = useState('');
  const [formValues, setFormValues] = useState({
    title: "",
    body: "",
  });
  useEffect(()=>{
    console.log(window.location.pathname);
    axios.get(window.location.pathname)
    .then(response =>{
      setFormValues(response.data);
    })
    .catch(error => {
        setResponseMessage("You are not authorized to make this request!");
    })
  },[])

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(window.location.pathname, formValues)
      .then((response) => {
        // setBlogList(response.data);
        setResponseMessage("Updated!");
      })
      .catch((error) => {
        setResponseMessage(error.response.data)
      });
  }
  if(responseMessage==="Posted!"){
    return <Redirect to={'/userblogs'}/>
  }
  return (
    <Box mt="5vh" p={3} boxShadow="sm" w="90%" bg="gray.200" rounded="lg">
      <Heading py="8vh">Update blog</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3} w="95%">
          <FormControl isRequired>
            <InputGroup>
              <InputLeftAddon children={<CalendarIcon />} />
              <Input
                bg="gray.50"
                type="text"
                placeholder="Title"
                aria-label="Email input field"
                value={formValues.title}
                id="title"
                name="title"
                onChange={(event) => {
                  setFormValues({
                    ...formValues,
                    [event.target.name]: event.target.value,
                  });
                }}
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftAddon children={<EditIcon />} />
              <Textarea
                bg="gray.50"
                placeholder="Content"
                value={formValues.body}
                id="body"
                h="40vh"
                name="body"
                onChange={(event) => {
                  setFormValues({
                    ...formValues,
                    [event.target.name]: event.target.value,
                  });
                }}
              />
            </InputGroup>
          </FormControl>
			    <h3 color="red">{responseMessage}</h3>
          <Button
            boxShadow="md"
            _active={{ boxShadow: "lg" }}
            type="submit"
            bg="gray.200"
          >
            Update
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default EditBlog;
