import {
	Box,
} from '@chakra-ui/react';

const Landing = (props) => {

	if(props.user){
		return (
			<Box
			w='400px'
			rounded='20px'
			border='1px solid'
			boxShadow='sm'
			borderColor='gray.300'
			fontSize="40px"
			mt="40vh">Hello {props.user.first_name} {props.user.last_name}</Box>
		)
	}
console.log(props);
	return (
		<Box
			w='400px'
			rounded='20px'
			border='1px solid'
			boxShadow='sm'
			borderColor='gray.300'
			fontSize="40px"
			mt="40vh">
			Hello, Please sign in.
		</Box>
	);
};

export default Landing;
