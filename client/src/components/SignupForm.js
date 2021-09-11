import { useState } from "react";
import {
	InputGroup,
	InputLeftAddon,
	Input,
	FormControl,
	Stack,
	Button,
	Divider
} from '@chakra-ui/react';
// import {Link} from 'react-router-dom';
import axios from "axios";
import { EmailIcon, LockIcon, InfoIcon } from '@chakra-ui/icons'

const SingupForm = (props) => {
	const [formValues, setFormValues] = useState({
		first_name: "",
		last_name: "",
		email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
		axios.post('http://127.0.0.1:8000/register', formValues)
			.then(response =>{
				console.log(response)
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
					<InputLeftAddon children={<InfoIcon />} />
					<Input
						bg="gray.50"
						type='name'
						id='first_name'
          	name="first_name"
						placeholder='First Name:'
						value={formValues.first_name}
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
					<InputLeftAddon children={<InfoIcon />} />
					<Input
						bg="gray.50"
						id='last_name'
          	name="last_name"
						placeholder='Last Name:'
						value={formValues.last_name}
          	onChange={(event) => {
							setFormValues({
								...formValues,
								[event.target.name]: event.target.value,
							})
          	}}
					/>
				</InputGroup>
			</FormControl>
			<Divider borderColor='gray.300' />
			<FormControl isRequired>
				<InputGroup>
					<InputLeftAddon children={<EmailIcon />} />
					<Input
						bg="gray.50"
						type='email'
						id='email_signup'
          	name="email"
						placeholder='Email:'
						value={formValues.email}
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
						id='password_signup'
          	name="password"
						placeholder='Password:'
						value={formValues.password}
          	onChange={(event) => {
							setFormValues({
								...formValues,
								[event.target.name]: event.target.value,
							})
          	}}
					/>
				</InputGroup>
			</FormControl>
			<Button boxShadow='md' _active={{ boxShadow: 'lg' }} type="submit" bg="gray.200">
					Sign Up
			</Button>
			</Stack>
		</form>
	);
};

export default SingupForm;