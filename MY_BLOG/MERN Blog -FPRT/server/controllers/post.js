import asyncHandler from 'express-async-handler'
import Post from '../model/Post.js'
import User from '../model/User.js'
//@route GET api/posts
//description get all posts 
//@access private
const getAllPost = asyncHandler(async (req,res)=>{
    try {
       const posts = await Post.find().sort({ date : -1}) 
       res.json(posts)
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }
  })

  //@route POST api/posts
//description create a post 
//@access private
const createPost = asyncHandler(async (req,res) => {
    try {
 const user = await User.findById(req.user.id).select('-password');
        const { title , description} = req.body;
         const newPost = await new Post({
            title,
            description,
            name:user.name,
            user:req.user.id
         })
            
       
    const createdPost= await newPost.save()
     user.posts.push(newPost._id)
            await user.save()
    res.status(201).json(createdPost)


    } catch (err) {
        console.log(err.message)
        res.status(400)
        throw new Error('bad request')
    }
})

//@route GET api/posts/:id
//description get a post by ID
//@access private

const singlePost =  asyncHandler(async (req,res)=>{
    try {
       const post = await Post.findById(req.params.id).populate('user')

       if(!post) {
           return res.status(404).json({ msg : 'Post not found'})
       }

       res.json(post)
    } catch (err) {
        console.log(err.message);

        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg : 'Post not found'})
        }
        res.status(500).send('Server error')
    }
  })


//@route DELETE api/post/:id
//description get a post 
//@access private

const deletePost = asyncHandler(async (req,res)=>{
    try {
       const post = await Post.findById(req.params.id); 

       if(!post) {
        return res.status(404).json({ msg : 'Post not found'})
    }

       //check user 

       if(post.user.toString() !== req.user.id) {
           return res.status(401).json({ msg: 'User not authorized'})
       }

       await post.remove();
       res.json({ msg :' Post removed'})
    } catch (err) {
        console.log(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg : 'Post not found'})
        }
        res.status(500).send('Server error')
    }
  })


  //update post
  const updatePost = asyncHandler(async (req, res) => {
    const {
      title,
      description,
  
    } = req.body
  
    const post = await Post.findById(req.params.id)
  
    if (post) {
      post.title = title
      post.description = description
    
    
  
      const updatedPost = await post.save()
      res.json(updatedPost)
    } else {
      res.status(404)
      throw new Error('Post not found')
    }
  })

//my post
const myPost = asyncHandler(async(req,res) => {
    Post.find({user:req.user._id}).populate("user", ["_id", "name"])
    .then(mypost =>{
        res.json({mypost})

    })
    .catch(err => {
        console.log(err)
    })
})



//@route PUT api/posts/like/:id
//description like a post 
//@access private
const likePost = asyncHandler(async (req,res) => {
  try {
    const post = await Post.findById(req.params.id);

    //check if the post has already been liked
    if(post.likes.filter(like => like.user.toString() === req.user.id).length > 0) 
    {
       return res.status(400).json({msg :" post already liked"})
    }

    post.likes.unshift({ user : req.user.id})

    await post.save();
    res.json(post.likes)


  } catch (err) {
      console.log(err.message)
  res.status(500).send('Server error')        
  }
})


//@route PUT api/posts/unlike/:id
//description like a post 
//@access private
const unlikePost= asyncHandler(async (req,res) => {
  try {
    const post = await Post.findById(req.params.id);

    //check if the post has already been liked
    if(post.likes.filter(like => like.user.toString() === req.user.id).length === 0) 
    {
       return res.status(400).json({msg :" post has not yet been liked"})
    }

   //get remove index 
   const removeIndex = post.likes
   .map(like => like.user.toString())
   .indexOf(req.user.id);

   post.likes.splice(removeIndex, 1)

    await post.save();
    
    res.json(post.likes)


  } catch (err) {
      console.log(err.message)
  res.status(500).send('Server error')        
  }
})


//@route POST api/posts/comment/:id
//description comment on a post 
//@access private
const addComment =  async (req,res) => {

try {
  const user = await User.findById(req.user.id).select('-password');
  const post = await Post.findById(req.params.id);
  
  const newComment = {
      text : req.body.text,
      name: user.name,
      pic: user.pic,
      user:req.user.id
  }
   post.comments.unshift(newComment)
   
   await post.save();

  res.json(post.comments)


} catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error')
    
}

}

//@route POST api/posts/comment/:id/:comment_id
//description delete comment
//@access private

const deleteComment = async (req, res) => {
  try {
      const post = await Post.findById(req.params.id);
   

      //Pull out comment
      const comment = post.comments.find(comment => comment.id === req.params.comment_id)

     //make sure comment exists
     if(!comment) {
         return res.status(404).json({msg :' Comments does not exist'})
     }
   //check user
   if(comment.user.toString() !== req.user.id) {
       return res.status(401).json({msg : 'User not found'})
   }

         //get remove index 
   const removeIndex = post.comments
   .map(comment => comment.user.toString())
   .indexOf(req.user.id);

   post.comments.splice(removeIndex, 1)
   
   await post.save();

   res.json(post.comments)

  } catch (err) {
      console.log(err.message);
      res.status(500).send('Server error ')
      
  }
}





  export { getAllPost,singlePost,createPost,deletePost,updatePost ,myPost, likePost, unlikePost, addComment, deleteComment}