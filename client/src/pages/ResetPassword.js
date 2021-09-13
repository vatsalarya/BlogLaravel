import { useState } from "react";
import {
	InputGroup,
	InputLeftAddon,
	Input,
	FormControl,
	Stack,
	Button,
  Box
} from '@chakra-ui/react';
import axios from "axios";
import { LockIcon } from '@chakra-ui/icons'
import { Redirect } from 'react-router';

const ResetPassword = (props) => {
  const [responseMessage, setResponseMessage] = useState('');
  const [formValues, setFormValues] = useState({
    'password': "",
    'conform_password': "",
  });

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.post(window.location.pathname, formValues)
			.then(response =>{
				setResponseMessage("Password Reset Successful")
			})
			.catch(error => {
				setResponseMessage(error.response.data.message)
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
					<InputLeftAddon children={<LockIcon />} />
					<Input
						bg="gray.50"
						type='password'
						placeholder='New Password'
						value={formValues.password}
						id="password"
          	name="password"
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
					<InputLeftAddon children={<LockIcon />} />
					<Input
						bg="gray.50"
						type='password'
						placeholder='Confrom New Password'
						value={formValues.conform_password}
						id="conform_password"
          	name="conform_password"
          	onChange={(event) => {
							setFormValues({
								...formValues,
								[event.target.name]: event.target.value,
							})
          	}}
					/>
				</InputGroup>
			</FormControl>
			<h3 color="red">{responseMessage}</h3>
				<Button boxShadow='md' _active={{ boxShadow: 'lg' }} type="submit" bg="gray.200">
					Reset
				</Button>
			</Stack>
		</form>
    </Box>
	);
};

export default ResetPassword;