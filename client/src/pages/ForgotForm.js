import { useState } from "react";
import {
	InputGroup,
	InputLeftAddon,
	Input,
	FormControl,
	Stack,
	Button,
  Box,
  Text
} from '@chakra-ui/react';
import axios from "axios";
import { Link,Redirect } from "react-router-dom";
import { EmailIcon} from '@chakra-ui/icons'

const ForgotForm = (props) => {

  const [formValues, setFormValues] = useState({
    email: "",
  });
  const [success, setSuccess] = useState('');
  function handleSubmit(event) {
		event.preventDefault();
		axios.post('/forgot', formValues)
			.then(response =>{
				console.log(response);
        setSuccess(response.data.message);
			})
			.catch(error => {
				console.log(error);
			})
  }
	if(props.user){
		return <Redirect to={'/'}/>
	}

	return (
    <Box mt="20vh"
    p={3}
    boxShadow='sm'
    w={['90%', "80%", "60%", "45%"]}
    bg="gray.300"
    // bg="gray.400"
    rounded='lg'>
		<form onSubmit={handleSubmit}>
			<Stack spacing={3}>
			<FormControl isRequired>
				<InputGroup>
					<InputLeftAddon children={<EmailIcon />}/>
					<Input
						bg="gray.50"
						type='email'
						placeholder='Email'
						aria-label='Email input field'
						value={formValues.email}
						id="email"
          	name="email"
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
					Send Reset Link
				</Button>
			</Stack>
		</form>
    </Box>
	);
};

export default ForgotForm;