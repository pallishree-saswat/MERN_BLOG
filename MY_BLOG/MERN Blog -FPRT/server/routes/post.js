import express from 'express'

const router = express.Router()

import { getAllPost,singlePost,createPost,deletePost,updatePost,myPost,likePost,unlikePost, addComment,deleteComment }  from '../controllers/post.js'

import { protect,admin } from '../middleware/authMiddleware.js'


router.route('/').post(protect,createPost).get( getAllPost)
router.route('/mypost').get(protect,myPost)
router.route('/comment/:id').put(protect,addComment)
router.route('/comment/:id/:comment_id').delete(protect,deleteComment)
router.route('/like/:id').put(protect,likePost)
router.route('/unlike/:id').put(protect,unlikePost)
router.route('/:id').delete(protect, deletePost).get(singlePost).put(protect,updatePost)

export default router