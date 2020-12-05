import React,{useEffect,useState} from 'react'
import { Row, Col, Image, ListGroup, Card, Button,Form} from 'react-bootstrap'
import { useDispatch , useSelector} from 'react-redux'
import PostItem from './PostItem'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import { PostDetails }  from '../actions/postAction'

const SinglePost = ({history,match}) => {
  const dispatch = useDispatch()

  const  getDetailPost = useSelector(state => state. getDetailPost)

  const { loading, error, post} =  getDetailPost
  
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin


useEffect(() => {


    if (!userInfo) {
      history.push('/login')
    }
 dispatch( PostDetails(match.params.id))

  },[dispatch, match])

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
</Col>
</Row>
</>



   )}



    </>
)



}

export default SinglePost