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
                  <Card.Img variant="top" src={post.image} />
                  <Card.Text>
                 {post.description}
                 </Card.Text>
      </Card.Body>

      </Card>
           
          


      </>
    )
}

export default Userpost
