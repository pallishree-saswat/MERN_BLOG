import React from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch , useSelector} from 'react-redux'
import { Link} from 'react-router-dom'

const Post = ({post}) => {
const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
    return (
      <Card className="my-3 p-3 rounded" >
        

          <Card.Body>
             
                <Card.Header> posted by {userInfo.name} </Card.Header>
               
                <Link to={`/post/${post._id}`}>
                  <Card.Title as="div">
                  <h3>    <strong> {post.title }</strong> </h3>
                  </Card.Title>
                  </Link>
                  <Card.Text>
                  {post.description}
                 </Card.Text>

             
             <Link to={`/post/${post._id}`} className='btn btn-primary'>
            Discussion{' '}
            
          </Link>
          

          </Card.Body>
      </Card>
    )
}

export default Post