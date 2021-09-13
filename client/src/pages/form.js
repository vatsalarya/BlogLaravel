	import {
	Text,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel, Box,
} from '@chakra-ui/react';
import SingupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import { Redirect } from 'react-router';

const Form = (props) => {

	if(props.user){
		return <Redirect to={'/'}/>
	}
	return (
		<Box
			mt="20vh"
			p={3}
			boxShadow='sm'
			w={['90%', "80%", "60%", "45%"]}
			bg="gray.100"
			// bg="gray.400"
			rounded='lg'>
			<Text fontSize='lg' py={10}>Please Sign up or login to your account.</Text>
			<Tabs isFitted variant='enclosed-colored' m={2} w='100%'>
				<TabList>
					<Tab>Login</Tab>
					<Tab>Sign up</Tab>
				</TabList>
				<TabPanels mt={3}>
					<TabPanel>
						<LoginForm setUser={props.setUser}/>
					</TabPanel>
					<TabPanel>
						<SingupForm />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
};

export default Form;