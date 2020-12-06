import React,{useEffect} from 'react'
import { Card ,Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link} from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux'
import { deleteMyPost } from '../actions/postAction'

const Mypost = ({post}) => {

const dispatch = useDispatch();

 const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

 const deletePost = useSelector((state) => state.deletePost)
  const { loading, error, success } = deletePost



 const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
  dispatch(deleteMyPost(id)) 
    }
  }
    return (
            <>
     
    <Card className="my-3 p-3 rounded" >
        
            <Card.Body>
              <Link to='/'>
                <Card.Header> {userInfo.name} </Card.Header>
                <Link to={`/post/${post._id}`}>
                  <Card.Title as="div">
                      <strong> {post.title }</strong>
                  </Card.Title>
                  </Link>
                  <Card.Text>
                 Some quick example text to build on the card title and make up the bulk
                 of the card's content.
                 </Card.Text>

              </Link>

           

          </Card.Body>

      </Card>
         <Button 
          type='button'
            className='btn btn-light' >
          
             <i className='fas fa-thumbs-up' />{' '}
            <span>0 likes </span>
         </Button>      {'   '}
           <Button
           onClick={() => deleteHandler(post._id)}
              type='button'
              className='btn btn-danger'
            >
           <i className='fas fa-trash' />
           </Button>
           <LinkContainer to={`/post/${post._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
           </LinkContainer>

      </>
    )
}

export default Mypost
