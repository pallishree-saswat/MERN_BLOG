import {createStore , combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {postListReducer ,postDetailsReducer,postDeleteReducer,postCreateReducer,postUpdateReducer} from './reducers/postReducer'
import { userLoginReducer , userRegisterReducer, userDetailsReducer , userUpdateProfileReducer, userDeleteReducer, userListReducer, userUpdateReducer} from './reducers/userReducer'


const reducer = combineReducers({
  getPosts : postListReducer,
  getDetailPost : postDetailsReducer,
  deletePost :postDeleteReducer,
  postCreate: postCreateReducer,
  postUpdate:postUpdateReducer,
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
  

})


  const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null



const initialState = {
 
    userLogin: {userInfo : userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(
    reducer ,
     initialState ,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store