import { combineReducers } from 'redux';
import dataReducer from './user';

const rootReducer = combineReducers({dataReducer});

export default rootReducer;