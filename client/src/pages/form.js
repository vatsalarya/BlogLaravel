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

const Form = (props) => {

	if(props.user){
		window.location = "/edit";
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
			<Text fontSize='lg' py={10}>Sign up or login to your account.</Text>
			<Tabs isFitted variant='enclosed-colored' m={2} w='100%'>
				<TabList>
					<Tab>Login</Tab>
					<Tab>Sign up</Tab>
				</TabList>
				<TabPanels mt={3}>
					<TabPanel>
						<LoginForm />
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



// import {
// 	Text,
// 	Flex,
// 	Tabs,
// 	TabList,
// 	Tab,
// 	TabPanels,
// 	TabPanel,
// } from '@chakra-ui/react';
// import SingupForm from '../components/SignupForm';
// import LoginForm from '../components/LoginForm';

// const Form = () => {
// 	return (
// 		<Flex
// 			direction='column'
// 			p={3}
// 			boxShadow='sm'
// 			w='40%'
// 			bg="gray.100"
// 			rounded='lg'
// 			justify='center'
// 			align='center'>
// 			<Text fontSize='lg' py={10}>Sign up or login to your account.</Text>
// 			<Tabs isFitted variant='enclosed-colored' m={2} w='100%'>
// 				<TabList>
// 					<Tab>Sign up</Tab>
// 					<Tab>Login</Tab>
// 				</TabList>
// 				<TabPanels mt={3}>
// 					<TabPanel>
// 						<SingupForm />
// 					</TabPanel>
// 					<TabPanel>
// 						<LoginForm />
// 					</TabPanel>
// 				</TabPanels>
// 			</Tabs>
// 		</Flex>
// 	);
// };

// export default Form;
