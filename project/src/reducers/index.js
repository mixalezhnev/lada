import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import app from './app';

export default combineReducers({
  // board,
  app,
  toastr: toastrReducer,
});
