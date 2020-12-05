import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { createPost}  from '../actions/postAction'

const AddPostScreen = ({match,history}) => {

  const dispatch = useDispatch()
 
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');

  const postCreate= useSelector((state) => state.postCreate)
  const {
    loading: loading,
    error: error,
    success: success,
  } = postCreate
  

   useEffect(() => {
    if (success) {
    
      history.push('/')
    } 
  }, [dispatch, history, success]) 

   const submitHandler = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("title",title)
    formData.append("description",description)
    console.log(formData)
    dispatch(
      createPost({
       formData
        
      })
    )
  }
    return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Add Post</h1>
        
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='title'
                placeholder='Enter Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Create Post
            </Button>
          </Form>
      
      </FormContainer>
    </>
    )
}

export default AddPostScreen
