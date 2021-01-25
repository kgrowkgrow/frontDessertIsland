import { combineReducers } from 'redux';
import user from './userReducer';
import recipes from './recipesReducer';
import comments from './commentsReducer';
import search from './searchReducer'


export default combineReducers({
  //reducers
  user,
  recipes,
  comments,
  search
});

