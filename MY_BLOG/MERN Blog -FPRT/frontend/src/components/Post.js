import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { useDispatch , useSelector} from 'react-redux'
import { Link} from 'react-router-dom'

/* import {addLike} from '../actions/postAction' */

const Post = ({post}) => {
const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

/*   const likeHandler = () => {
    dispatch(addLike(post._id))
    console.log(post._id)
  } */


    return (
      <>
      <Card className="my-3 p-3 rounded" >
        

          <Card.Body>
          <Link to={`/user/${post.user}`}>
                <Card.Header> posted by {post.name} </Card.Header>
                </Link>
                <Link to={`/post/${post._id}`}>
                  <Card.Title as="div">
                  <h3>    <strong> {post.title }</strong> </h3>
                  </Card.Title>
                  </Link>
                  <Card.Text>
                  {post.description}
                 </Card.Text>

             
             <Link to={`/post/${post._id}`} className='btn btn-primary'>
            Discussion  {'   '}
            {post.comments.length > 0 && (
              <span className='comment-count'>{post.comments.length}</span>
            )}
          </Link>
          

          </Card.Body>
      </Card>
     
   {/* <Button onClick={likeHandler}
       type='button'
       className='btn btn-light' >
       
     <i className='fas fa-thumbs-up' />{' '}
     <span>{post.likes.length > 0 && <span>{post.likes.length}</span>}</span>
  </Button>

   {'   '}
 <Button 
  type='button'
   className='btn btn-light' >
       
  <i className='fas fa-thumbs-down' />{' '}
         
  </Button>  */}
  </>
    )
}

export default Post