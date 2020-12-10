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
            
                <Card.Header>{userInfo.name} </Card.Header>
       
                
                <Link to={`/post/${post._id}`}>
                  <Card.Title as="div">
                      <strong> {post.title }</strong>
                  </Card.Title>
                 <Card.Img variant="top" src={post.image} />
                  </Link>
                  <Card.Text>
                 {post.description}
                 </Card.Text>

             

           

          </Card.Body>

      </Card>
        
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
