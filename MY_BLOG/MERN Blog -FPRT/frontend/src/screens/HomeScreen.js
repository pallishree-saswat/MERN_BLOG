import React,{useEffect} from 'react'
import {Row , Col} from 'react-bootstrap'
import { useDispatch , useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {allPosts } from '../actions/postAction'

const HomeScreen = () => {

 const dispatch = useDispatch()  
 
 const  getPosts = useSelector(state => state. getPosts)
 const {loading, error,posts } =  getPosts

useEffect(() => {
dispatch(allPosts())
},[dispatch])
   
    return (
        <>
       <h1>Latest Posts</h1>
        {loading ?(
            <Loader />
        )  : error ? (
            <Message> {error} </Message>
        ) : (
            <>
            <Row>
            {posts.map(post => (
                <Col md={9} >
                
                    <Post post={post} />
                </Col>
            ))}
 
 
       </Row>

   
      
        </>
        )}
        </>
    )
}

export default HomeScreen
