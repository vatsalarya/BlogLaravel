import {
	Box,
} from '@chakra-ui/react';
import { Link,Redirect } from "react-router-dom";
const Card = (props) => {
  if(!props.user){
    return <Redirect to={'/login'}/>
  }
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
			Hello world
		</Box>
	);
};

export default Card;
