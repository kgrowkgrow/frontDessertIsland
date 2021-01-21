import { combineReducers } from 'redux';
import user from './userReducer';
import recipes from './recipesReducer';
import comments from './commentsReducer';


export default combineReducers({
  //reducers
  user,
  recipes,
  comments
});

