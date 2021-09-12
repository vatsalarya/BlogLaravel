import React, { Component } from 'react';
import { Button,} from "@chakra-ui/react"
import { Flex, Spacer } from "@chakra-ui/react"
import { Center} from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import axios from 'axios';


class Login extends Component{

    state={
        email:"",
        password:""
    }

    handleInput=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    submitDetails=async(e)=>{
        e.preventDefault();

        const res = await axios.post('http://127.0.0.1:8000/login',this.state)

        console.log(res.data);

        

    }



    render(){
        return(
        <Center h="500px">
            <Box>
                <form method="post" onSubmit={this.submitDetails}>
                    <Input placeholder="Enter email"  mb={10} size="lg" name="email" onChange={this.handleInput} value={this.state.email}/>
                    <Input placeholder="Enter password" type="password" mb={10} size="lg" name="password" onChange={this.handleInput} value={this.state.password} />

                    <Flex>
                        <Button type="submit" bg="lightgreen" size="lg" >Login </Button>
                        <Spacer />
                        <Link to={'SignUp' }><Button size="lg" bg="lightblue" >Sign Up</Button>
                        </Link>
                    </Flex>
                </form>
            </Box>
        </Center>
    );
    }
}

export default Login;