import React,{useEffect} from 'react'
import { Card ,Button} from 'react-bootstrap'
import { useDispatch , useSelector} from 'react-redux'
import { Link} from 'react-router-dom'

const PostItem = ({post}) => {

const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

 

  
    return(
        <>
    <Card className="my-3 p-3 rounded" >
         <Card.Body>
              <Link to='/'>
                <Card.Header> user </Card.Header>
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
     </Button>{'   '}
    <Button 
     type='button'
      className='btn btn-light' >
          
     <i className='fas fa-thumbs-down' />{' '}
            
     </Button> { '     '}
   
             <Button
           
              type='button'
              className='btn btn-danger'
             >
              <i className='fas fa-trash' />
            </Button>

  
           
      </>
    )
}

export default PostItem
