import { combineReducers } from 'redux';
import AuthReducer from '../reducers/auth_reducer';
import PostsReducer from '../reducers/posts_reducers'

const rootReducer = combineReducers({
  auth_reducer: AuthReducer,
  posts_reducer: PostsReducer,
});

export default rootReducer