import React,{useEffect} from 'react'
import {Row , Col} from 'react-bootstrap'
import { useDispatch , useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {allPosts } from '../actions/postAction'

const HomeScreen = ({history,match}) => {
    const keyword = match.params.keyword


 const dispatch = useDispatch()  
 
const userLogin = useSelector((state) => state.userLogin)
const { userInfo } = userLogin
 
 const  getPosts = useSelector(state => state. getPosts)
 const {loading, error,posts } =  getPosts



useEffect(() => {
    
    if (!userInfo) {
        history.push('/login')
      }
dispatch(allPosts(keyword))
},[dispatch,userInfo,keyword])
   
    return (
        <>
        {!keyword  ? 
          <h1>Latest Posts</h1> : 
          <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
    }
      
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
