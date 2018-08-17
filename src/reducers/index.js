import { combineReducers } from 'redux'
import newUser from './newUser';
import selectedUser from './selectedUser';
import userCollection from './userCollection';

export default combineReducers({
  newUser,
  selectedUser,
  userCollection
});
