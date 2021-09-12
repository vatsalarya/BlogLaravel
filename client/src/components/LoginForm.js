import { useState } from "react";
import {
	InputGroup,
	InputLeftAddon,
	Input,
	FormControl,
	Stack,
	Button,
	FormLabel,
	Switch 
} from '@chakra-ui/react';
import axios from "axios";
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import {Link} from 'react-router-dom';

const LoginForm = (props) => {

  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });

  function handleSubmit(event) {
		event.preventDefault();
		axios.post('/login', formValues)
			.then(response =>{
				localStorage.setItem('token',response.data.token);
				window.location = "/home";
				// console.log(localStorage.getItem('token'));
			})
			.catch(error => {
				console.log(error)
			})
  }
	return (
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
			<FormControl isRequired>
				<InputGroup>
					<InputLeftAddon children={<LockIcon />} />
					<Input
						bg="gray.50"
						type='password'
						placeholder='Password'
						aria-label='Password input field'
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
			<FormControl display="flex" alignItems="center">
				<FormLabel htmlFor="email-alerts" mb="0">
					Remember me
				</FormLabel>
				<Switch id="email-alerts" />
			</FormControl>
				<Button boxShadow='md' _active={{ boxShadow: 'lg' }} type="submit" bg="gray.200">
					Login
				</Button>
				<Link to="/forgot">Forgot Password?</Link>
			</Stack>
		</form>
	);
};

export default LoginForm;