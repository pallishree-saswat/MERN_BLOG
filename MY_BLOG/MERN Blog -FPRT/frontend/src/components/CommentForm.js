import React, { useState } from 'react';
import { Form, TextArea } from 'react-bootstrap'
import { addComment } from '../actions/postAction';
const CommentForm = ({postId, addComment}) => {

  const [text, setText] = useState('');
    return (
        <div className='post-form'>
     
        <h6> Comment  here....</h6>
      
      <Form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
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
