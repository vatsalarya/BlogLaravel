import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Form from './pages/Form';
import Card from './pages/Card.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ForgotForm from './pages/ForgotForm.js';
import Blogs from './pages/Blogs.js';
import Landing from './pages/Landing.js';

function App() {

  const [user, setUser] = useState(null);
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
      <Box fontSize="xl" justify='center' align='center' bg="gray.50">
        <Navbar user={user} setUser={setUser}/>
        <Switch>
        <Route path="/home">
          <Blogs/>
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
      </Switch>
      </Box>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
