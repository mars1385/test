//import
import { combineReducers } from 'redux';

//reducers
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;
