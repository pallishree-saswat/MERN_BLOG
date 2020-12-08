import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {  useDispatch , useSelector } from 'react-redux';
import Message from './Message'
import Loader from './Loader'

import {deleteMyComment } from '../actions/postAction';

const AllComments = ({  postId,
    comment: { _id, text, name, pic, user, date }
}) => {

  const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    
    const commentPost = useSelector((state) => state.commentPost)
    const { success,error,loading } = commentPost
  
     


    return (
      <>
      
        <div className='p-1 my-1'>
        <div>
          <Link to={`/user/${user}`}>
          {/* <img  src={pic}  className="round-img" width="50px" height="50px" /> */}
            <h6>{name}</h6>
          </Link>
        </div>
        <div>
          <p className='my-1'>{text}</p>
          <p className='post-date'>
            Posted on {date}
          </p>
       <div>
       { user === userInfo._id && (
            <button
            onClick={() => dispatch(deleteMyComment(postId, _id))}
              type='button'
              className='btn btn-danger'
            >
              <i className='fas fa-times' />
            </button>
          )}
       </div>
        </div>
      </div>
      </>
    )
}



export default  AllComments
