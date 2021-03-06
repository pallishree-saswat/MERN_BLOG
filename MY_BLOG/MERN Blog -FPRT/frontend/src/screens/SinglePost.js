import React,{useEffect,useState} from 'react'
import { Row, Col, Image, ListGroup, Card, Button,Form} from 'react-bootstrap'
import { useDispatch , useSelector} from 'react-redux'
import PostItem from './PostItem'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import { PostDetails }  from '../actions/postAction'
import CommentForm from '../components/CommentForm'
import AllComments from '../components/AllComments'

const SinglePost = ({history,match}) => {
  const dispatch = useDispatch()

  const  getDetailPost = useSelector(state => state. getDetailPost)

  const { loading, error, post} =  getDetailPost
  
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const commentPost = useSelector((state) => state.commentPost)
  const { success:commentSuccess,error:commentError,loading:commentLoading } = commentPost
  const commentDeletePost = useSelector((state) => state.commentDeletePost)
  const { success:commentDeleteSuccess } = commentDeletePost


useEffect(() => {
  if (!userInfo) {
      history.push('/login')
    }
 dispatch( PostDetails(match.params.id))

  },[dispatch, match, commentSuccess,commentDeletePost])

return (
    <>
    <Link className="btn btn-light my-3" to="/">
    Back to Posts
    </Link>
   {loading ? (
       <Loader />
   ) : error ? (
       <Message variant='danger'> {error} </Message>
   ) : (
<>
<Row>
<Col md={9}>
<PostItem  post={post}/>
<CommentForm postId={post._id} />
      <div className="comments">
        {post.comments.map((comment) => (
          <AllComments key={comment._id} comment={comment} postId={post._id} commentId={comment._id} />
        ))}
      </div>
  
</Col>
</Row>
</>



   )}



    </>
)



}

export default SinglePost