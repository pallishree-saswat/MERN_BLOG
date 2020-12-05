import React from 'react'
import {Container } from 'react-bootstrap'
import {BrowserRouter as Router , Route} from 'react-router-dom'

import Header from './components/Header'
import HomeScreen  from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import AddPostScreen from './screens/AddPostScreen'
import SinglePost from './screens/SinglePost'

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
    <Route exact path="/post/:id" component={SinglePost} />
    </Container>
    </main>
    </Router>


  );
}

export default App;
