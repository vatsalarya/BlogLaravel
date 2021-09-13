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
import ResetPassword from './pages/ResetPassword.js';
import Blogs from './pages/Blogs.js';
import Landing from './pages/Landing.js';
import CreateBlog from './pages/CreateBlog.js';
import UserBlogs from './pages/UserBlogs.js';
import FullBlog from './pages/FullBlog.js';
import EditBlog from './pages/EditBlog.js';

function App() {
  const [user, setUser] = useState(null);
	useEffect(()=>{
		axios.get('/user')
		.then(response =>{
			setUser(response.data);
      localStorage.setItem('user', response.data);
			// console.log(localStorage.getItem('user'));
		})
		.catch(error => {
			console.log(error)
		})
	},[])
  document.body.style = 'background: #F7FAFC;';

  return (
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Box fontSize="xl" justify='center' align='center'>
        <Navbar user={user} setUser={setUser}/>
        <Switch>
        <Route path="/blogs/edit/:id">
          <EditBlog user={user}/>
        </Route>
        <Route path="/blogs/:id">
          <FullBlog user={user}/>
        </Route>
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
        <Route path="/reset/:id">
          <ResetPassword user={user}/>
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
