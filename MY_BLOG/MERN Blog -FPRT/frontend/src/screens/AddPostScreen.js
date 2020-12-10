import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { createPost, addPost}  from '../actions/postAction'

const AddPostScreen = ({match,history}) => {

  const dispatch = useDispatch()
 
 const [title, setTitle] = useState('');
 const [ description, setDescription] = useState('');
 const [image, setImage] = useState('')
 const [uploading, setUploading] = useState(false)


  const postCreate= useSelector((state) => state.postCreate)
  const {
    loading: loading,
    error: error,
    success: success,post
  } = postCreate
  

   useEffect(() => {
    if (success) {
    
      history.push('/')
    } 
  }, [dispatch, history, success]) 

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }







   const submitHandler = (e) => {
    console.log("pppp")
    e.preventDefault()
  

    dispatch(createPost({title,description,image}))
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
            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
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
