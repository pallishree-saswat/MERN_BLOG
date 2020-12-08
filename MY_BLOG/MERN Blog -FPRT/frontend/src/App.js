import React,{useEffect} from 'react'
import {Container } from 'react-bootstrap'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import jwt_decode from 'jwt-decode';
import Header from './components/Header'
import HomeScreen  from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import AddPostScreen from './screens/AddPostScreen'
import SinglePost from './screens/SinglePost'
import EditPostScreen from './screens/EditPostScreen'
import UserProfile from './screens/UserProfile'

import { loadUser,login, logout} from './actions/userAction';
import setAuth from './utils/setAuth';
import store from './store'
import { useSelector, useDispatch} from 'react-redux'




function App() {

  return (
    <Router>
    <Header />
   <main className="py-3">
      <Container>
    <Route exact path="/" component={HomeScreen} />
   <Route exact path="/addpost" component={AddPostScreen} />
    <Route exact path="/profile" component={ProfileScreen} />
    <Route exact path="/login" component={LoginScreen} />
    <Route exact path="/register" component={RegisterScreen} />
    <Route exact path="/user/:id" component={UserProfile} />
    <Route exact path="/post/:id" component={SinglePost} />
    <Route path='/post/:id/edit' component={EditPostScreen} />
    </Container>
    </main>
    </Router>


  );
}

export default App;
