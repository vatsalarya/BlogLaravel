import { useState, useEffect } from "react";
import {
	InputGroup,
	InputLeftAddon,
	Input,
	FormControl,
	Stack,
	Button,
  Box,
  Text,
  Textarea,
  Heading,
} from '@chakra-ui/react';
import axios from "axios";
import { EmailIcon} from '@chakra-ui/icons'

const CreateBlog = (props) => {
  const [success, setSuccess] = useState('');
  const [formValues, setFormValues] = useState({
    title: "",
    content: ""
  });
  function handleSubmit(event) {
		event.preventDefault();
		axios.post('/forgot', formValues)
			.then(response =>{
				console.log(localStorage.getItem('token'));
        setSuccess('Check your email!');
			})
			.catch(error => {
				console.log(error);
        setSuccess('Check your email!');
			})
  }
	// if(!props.user){

	// }
	return (
    <Box mt="5vh"
    p={3}
    boxShadow='sm'
    w="90%"
    bg="gray.300"
    rounded='lg'>
    <Heading py="8vh">Create a blog</Heading>
		<form onSubmit={handleSubmit}>
			<Stack spacing={3} w="95%">
      <FormControl isRequired>
				<InputGroup>
					<InputLeftAddon children={<EmailIcon />}/>
					<Input
						bg="gray.50"
						type='text'
						placeholder='Title'
						aria-label='Email input field'
						value={formValues.title}
						id="title"
          	name="title"
          	onChange={(event) => {
							setFormValues({
								...formValues,
								[event.target.name]: event.target.value,
							})
          	}}
					/>
				</InputGroup>
			</FormControl>
			<FormControl isRequired>
				<InputGroup>
					<InputLeftAddon children={<EmailIcon />}/>
					<Textarea
						bg="gray.50"
						placeholder='Content'
						value={formValues.content}
						id="content"
            h="40vh"
          	name="content"
          	onChange={(event) => {
							setFormValues({
								...formValues,
								[event.target.name]: event.target.value,
							})
          	}}
					/>
				</InputGroup>
			</FormControl>
      <h1>{success}</h1>
				<Button boxShadow='md' _active={{ boxShadow: 'lg' }} type="submit" bg="gray.200">
					Post
				</Button>
			</Stack>
		</form>
    </Box>
	);
};

export default CreateBlog;