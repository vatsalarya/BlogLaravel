import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/Navbar.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Form from './pages/form';
import Card from './pages/card.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ForgotForm from './components/ForgotForm.js';
import Blog from './components/Blog.js';

function App() {

  const [user, setUser] = useState('');
	useEffect(()=>{
		const config= {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token')
			}
		};
		axios.get('http://127.0.0.1:8000/user', config)
		.then(response =>{
			console.log(response);
			setUser(response.data);
      localStorage.setItem('user', response.data)
		})
		.catch(error => {
			console.log(error)
		})
	},[])

  return (
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Box fontSize="xl" justify='center' align='center' bg="gray.50">
        <Navbar user={user}/>
        <Route path="/home">
          <Blog/>
          <Blog/>
          <Blog/>
          <Blog/>
        </Route>
        <Route path="/edit">
          <Card user={user}/>
        </Route>
        <Route path="/login">
          <Form user={user}></Form>
        </Route>
        <Route path="/forgot">
          <ForgotForm user={user}/>
        </Route>
      </Box>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
