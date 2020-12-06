import React,{useEffect} from 'react'
import { Card ,Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link} from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux'


const Userpost = ({post}) => {

const dispatch = useDispatch();

const userLogin = useSelector((state) => state.userLogin)
const { userInfo } = userLogin

  
  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails






    return (
            <>
     
    <Card className="my-3 p-3 rounded" >
        
            <Card.Body>
            
                <Card.Header>{user.name} </Card.Header>
       
             
                <Link to={`/post/${post._id}`}>
                  <Card.Title as="div">
                      <strong> {post.title }</strong>
                  </Card.Title>
                  </Link>
                  <Card.Text>
                 {post.description}
                 </Card.Text>

             

           

          </Card.Body>

      </Card>
         <Button 
          type='button'
            className='btn btn-light' >
          
             <i className='fas fa-thumbs-up' />{' '}
            <span>0 likes </span>
         </Button>      {'   '}
          


      </>
    )
}

export default Userpost
