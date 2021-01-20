import { combineReducers } from 'redux';
// import your reducers here

import user from './userReducer';
import recipes from './recipesReducer';


export default combineReducers({
  //reducers
  user,
  recipes
});

