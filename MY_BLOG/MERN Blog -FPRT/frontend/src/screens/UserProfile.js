import React, { useState, useEffect } from 'react'
import {  Button, Row, Col} from 'react-bootstrap'
import Avatar from 'react-avatar';
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { getUserDetails } from '../actions/userAction'
import Userpost from '../components/Userpost'




const UserProfile = ({ match, history }) => {

    const userId = match.params.id
    const dispatch = useDispatch()

    

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails


  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin




    
  useEffect(() => {
    dispatch(getUserDetails(userId))
},[getUserDetails,userId]) 




  

  return (
    <Row>
      <Col md={3}>
        
        <h2>Profile</h2>
        <Avatar name={user.name}  size={120} round="50%"  />
        <h3> {user.name} </h3>
        <h5> Total Post : {user.posts ? user.posts.length : '0'} </h5>
     
      </Col>
      <Col md={9}>
          <h2> {user.name} Posts</h2>
           {user.posts && user.posts.map((post) => (
          <Userpost key={post._id} post={post}  />
   ))}
    
  
   </Col>
  </Row> 
  )
}

export default UserProfile