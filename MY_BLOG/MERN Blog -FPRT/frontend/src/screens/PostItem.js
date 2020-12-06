import React,{useEffect} from 'react'
import { Card ,Button} from 'react-bootstrap'
import { useDispatch , useSelector,connect} from 'react-redux'
import { Link} from 'react-router-dom'
import {addLike} from '../actions/postAction'


const PostItem = ({post}) => {

const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

 

  
    return(
        <>
    <Card className="my-3 p-3 rounded" >
         <Card.Body>
              <Link to='/'>
                <Card.Header> posted by {userInfo.name} </Card.Header>
                </Link>
                <Link to={`/post/${post._id}`}>
                  <Card.Title as="div">
                      <strong> {post.title }</strong>
                  </Card.Title>
                
                  <Card.Text>
                 {post.description}
                 </Card.Text>
                 <p> posted on {post.date} </p>

              </Link>

           

          </Card.Body>

      </Card>
     <Button onClick={() => addLike(post._id)}
          type='button'
            className='btn btn-light' >
          
             <i className='fas fa-thumbs-up' />{' '}
             <span>{post.likes.length > 0 && <span>{post.likes.length}</span>}</span>
     </Button>{'   '}
    <Button 
     type='button'
      className='btn btn-light' >
          
     <i className='fas fa-thumbs-down' />{' '}
            
     </Button> 

  
           
      </>
    )
}

export default PostItem
