import React,{useEffect} from 'react'
import { Card ,Button} from 'react-bootstrap'
import { useDispatch , useSelector} from 'react-redux'
import { Link} from 'react-router-dom'




const PostItem = ({post}) => {
  const dispatch = useDispatch()

const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  




    return(
        <>
    <Card className="my-3 p-3 rounded" >
         <Card.Body>
              <Link to={`/user/${post.user}`}>
                <Card.Header> posted by {post.name} </Card.Header>
                </Link>
             
                  <Card.Title as="div">
                     <h3><strong> {post.title }</strong></h3> 
                  </Card.Title>
                  <Card.Img variant="top" src={post.image} />
                  <Card.Text>
                 {post.description}
                 </Card.Text>
                 <p> posted on {post.date} </p>

   </Card.Body>

      </Card>

          
      </>
    )
}

export default PostItem
