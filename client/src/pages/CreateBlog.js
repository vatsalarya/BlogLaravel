import { useState } from "react";
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

const CreateBlog = (props) => {
  const [responseMessage, setResponseMessage] = useState('');
  const [formValues, setFormValues] = useState({
    title: "",
    body: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/blogs", formValues)
      .then((response) => {
        setResponseMessage("Posted!");
      })
      .catch((error) => {
				// setResponseMessage(error.response.data.message)
      });
  }
  if(!props.user){
    return <Redirect to={'/login'}/>
  }
  if(responseMessage==="Posted!"){
    return <Redirect to={'/userblogs'}/>
  }
  return (
    <Box mt="5vh" p={3} boxShadow="sm" w="90%" bg="gray.200" rounded="lg">
      <Heading py="8vh">Create a blog</Heading>
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
            Post
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default CreateBlog;
