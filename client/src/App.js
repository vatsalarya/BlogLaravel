import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Form from './pages/Form';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ForgotForm from './pages/ForgotForm.js';
import Blogs from './pages/Blogs.js';
import Landing from './pages/Landing.js';
import CreateBlog from './pages/CreateBlog.js';
import UserBlogs from './pages/UserBlogs.js';

function App() {

  const [user, setUser] = useState(null);
	useEffect(()=>{
		axios.get('/user')
		.then(response =>{
			setUser(response.data);
			// console.log(user.id);
      localStorage.setItem('user', response.data);
			// console.log(localStorage.getItem('user'));
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
        <Route path="/blogs">
          <Blogs user={user}/>
        </Route>
        <Route path="/create">
          <CreateBlog user={user}/>
        </Route>
        <Route path="/userblogs">
          <UserBlogs user={user}/>
        </Route>
        <Route path="/login">
          <Form user={user} setUser={setUser}></Form>
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
