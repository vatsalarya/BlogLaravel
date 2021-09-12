import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/Navbar.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Form from './pages/form';
import Card from './pages/card.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ForgotForm from './pages/ForgotForm.js';
import Blog from './pages/Blog.js';
import Landing from './pages/landing.js';

function App() {

  const [user, setUser] = useState('');
	useEffect(()=>{
		axios.get('/user')
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
    <Switch>
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
        <Route path="/forgot">
          <ForgotForm user={user}/>
        </Route>
        <Route path="/">
          <Landing user={user}/>
        </Route>
      </Box>
      </Switch>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
