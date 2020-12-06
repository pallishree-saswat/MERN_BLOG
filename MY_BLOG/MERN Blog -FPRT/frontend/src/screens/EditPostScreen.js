
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { updatePost,PostDetails }  from '../actions/postAction'
import { POST_UPDATE_RESET } from '../constants/postConstants'

const AddPostScreen = ({match,history}) => {

    const postId = match.params.id

  const dispatch = useDispatch()
 
 const [title, setTitle] = useState('');
 const [ description, setDescription] = useState('');

 const  getDetailPost = useSelector((state) => state. getDetailPost )

 const { post} =  getDetailPost

  const postUpdate= useSelector((state) => state.postUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = postUpdate
  

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: POST_UPDATE_RESET })
      history.push('/')
    } else {
      if ( post._id !== postId) {
        dispatch(PostDetails(postId))
      } else {
        setTitle(post.title)
       
        setDescription(post.description)
      }
    }
  }, [dispatch, history, postId, post, successUpdate])

   const submitHandler = (e) => {
    console.log("pppp")
    e.preventDefault()
   dispatch(
    updatePost(
        {_id : postId, title,description}
        
        ))
  }
    return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Post</h1>
        
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
              Update Post
            </Button>
          </Form>
      
      </FormContainer>
    </>
    )
}

export default AddPostScreen
