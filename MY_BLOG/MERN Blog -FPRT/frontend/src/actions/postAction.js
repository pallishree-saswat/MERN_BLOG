import {
POST_LIST_REQUEST,
POST_LIST_SUCCESS,
POST_LIST_FAIL,
POST_LIST_RESET,
 POST_DETAILS_SUCCESS,
 POST_DETAILS_FAIL,
 POST_DETAILS_REQUEST,
 POST_DELETE_REQUEST,
 POST_DELETE_SUCCESS,
 POST_DELETE_FAIL,
 POST_CREATE_SUCCESS,
 POST_CREATE_REQUEST,
 POST_CREATE_FAIL
} from '../constants/postConstants'

import axios from 'axios'


export const allPosts = () => async (dispatch) => {
    try {
      dispatch({
        type: POST_LIST_REQUEST,
      })
  

      const { data } = await axios.get(`/api/post`)
  
      dispatch({
        type: POST_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: POST_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const PostDetails = (id) => async(dispatch) => {
    try {
        
        dispatch({ type : POST_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/post/${id}`)

        dispatch({ 
            type : POST_DETAILS_SUCCESS,
            payload : data
        })


    } catch (error) {
         dispatch({
             type: POST_DETAILS_FAIL,
             payload : 
             error.response && error.response.data.message 
             ? error.response.data.message
             : error.message
         })
    }
}

// Delete post
export const deleteMyPost = id => async( dispatch,getState )=> {
  try {
      dispatch({ type : POST_DELETE_REQUEST})
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

    await axios.delete(`api/post/${id}`,config);

    dispatch({
      type: POST_DELETE_SUCCESS,
      
    });

 
  } catch (error) {
         dispatch({
             type: POST_DELETE_FAIL,
             payload : 
             error.response && error.response.data.message 
             ? error.response.data.message
             : error.message
         })
    }
};


  export const createPost = (formData) => async (dispatch, getState) => {
    try {
      dispatch({
        type: POST_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`/api/post`, formData, config)
  
      dispatch({
        type: POST_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: POST_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }