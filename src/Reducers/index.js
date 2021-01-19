import { combineReducers } from 'redux';
// import your reducers here

import userReducer from './userReducer';


export default combineReducers({
  //reducers
  userReducer: userReducer
});

