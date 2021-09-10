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
		})
		.catch(error => {
			console.log(error)
		})
	},[])

  return (
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Box fontSize="xl" justify='center' align='center'>
        <Navbar/>
        <Route path="/edit">
          <Card user={user}/>
        </Route>
        <Route path="/login">
          <Form user={user}></Form>
        </Route>
      </Box>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
