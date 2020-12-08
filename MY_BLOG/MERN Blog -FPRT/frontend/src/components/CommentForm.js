import React, { useState } from 'react';
import { Form, FormControl} from 'react-bootstrap'
import { addComments } from '../actions/postAction';
import { useDispatch } from 'react-redux'
import FormContainer from './FormContainer'


const CommentForm = ({postId}) => {

  const [text, setText] = useState('');
  const dispatch = useDispatch()

    return (
     <div className='post-form'>
      
        <h6> Comment  here....</h6>
      
      <Form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
         dispatch(addComments(postId,{text}));
         console.log(text)
          setText('');
        }}
      >
        <FormControl
          as='textarea'
          name='text'
          cols='30'
          placeholder='comment here...'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </Form>
  
    </div>
    )
}

export default CommentForm
